// src/app/admin/gallery/videos/page.tsx
'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

// Define types for GalleryVideo and API responses
interface GalleryVideo {
    id: string;
    _id?: string;
    title: string;
    description?: string;
    video_url: string; // YouTube URL or similar
    sort_order: number;
    status: number;
    createdAt?: string;
    updatedAt?: string;
}

const GalleryVideosPage = () => {
    const [videos, setVideos] = useState<GalleryVideo[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [editingVideo, setEditingVideo] = useState<GalleryVideo | null>(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Form states
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [sortOrder, setSortOrder] = useState(0);
    const [status, setStatus] = useState(1);

    const API_URL = '/api/gallery/videos';

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get<GalleryVideo[]>(API_URL);
            // Add temporary IDs for frontend manipulation if not present
            const videosWithIds = response.data.map(v => ({ ...v, id: v._id || v.id || Math.random().toString() }));
            setVideos(videosWithIds);
        } catch (err: any) {
            console.error('Error fetching videos:', err);
            setError('Failed to load videos. Please try again later.');
            toast.error('Failed to load videos.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const videoData = {
            title,
            description: description || undefined,
            video_url: videoUrl,
            sort_order: Number(sortOrder),
            status: Number(status),
        };

        try {
            if (editingVideo) {
                // Update existing video
                await axios.put(`${API_URL}/${editingVideo.id}`, videoData);
                toast.success('Video updated successfully!');
            } else {
                // Create new video
                await axios.post(API_URL, videoData);
                toast.success('Video added successfully!');
            }
            fetchVideos(); // Refresh list
            resetForm();
        } catch (err: any) {
            console.error('Error submitting form:', err);
            setError(`Failed to ${editingVideo ? 'update' : 'add'} video.`);
            toast.error(`Failed to ${editingVideo ? 'update' : 'add'} video.`);
        } finally {
            setIsLoading(false);
        }
    };

    const handleEdit = (video: GalleryVideo) => {
        setEditingVideo(video);
        setTitle(video.title);
        setDescription(video.description || '');
        setVideoUrl(video.video_url);
        setSortOrder(video.sort_order);
        setStatus(video.status);
        setIsFormOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this video?')) {
            setIsLoading(true);
            setError(null);
            try {
                await axios.delete(`${API_URL}/${id}`);
                toast.success('Video deleted successfully!');
                fetchVideos(); // Refresh list
            } catch (err: any) {
                console.error('Error deleting video:', err);
                setError('Failed to delete video.');
                toast.error('Failed to delete video.');
            } finally {
                setIsLoading(false);
            }
        }
    };

    const resetForm = () => {
        setEditingVideo(null);
        setTitle('');
        setDescription('');
        setVideoUrl('');
        setSortOrder(0);
        setStatus(1);
        setIsFormOpen(false);
    };

    const getThumbnailUrl = (url: string | undefined): string => {
        if (!url) return '/assets/images/placeholder.jpg';
        const videoId = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)|v=([a-zA-Z0-9_-]+)/)?.[1] || url.match(/v=([a-zA-Z0-9_-]+)/)?.[2];
        if (videoId) {
            return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }
        return '/assets/images/placeholder.jpg'; // Fallback
    };

    if (isLoading && videos.length === 0) {
        return <div className="text-center py-5">Loading videos...</div>;
    }

    if (error) {
        return <div className="text-center py-5 text-danger">{error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <i className="fas fa-video text-primary"></i> Manage Gallery Videos
            </h1>

            {!isFormOpen && (
                <button onClick={() => setIsFormOpen(true)} className="btn btn-primary mb-4">
                    <i className="fas fa-plus"></i> Add New Video
                </button>
            )}

            {isFormOpen && (
                <div className="card mb-4">
                    <div className="card-header flex justify-between items-center">
                        <h5 className="card-title mb-0 flex items-center gap-2">
                            <i className={`fas fa-${editingVideo ? 'edit' : 'plus-circle'}`}></i>
                            {editingVideo ? 'Edit Video' : 'Add New Video'}
                        </h5>
                        <button onClick={resetForm} className="btn btn-secondary btn-sm">
                            <i className="fas fa-times"></i> Close Form
                        </button>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Title */}
                            <div className="col-span-1 md:col-span-2">
                                <label htmlFor="title" className="form-label">Title <span className="text-red-600">*</span></label>
                                <input
                                    type="text"
                                    id="title"
                                    className="form-control"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                    placeholder="e.g. Passing Out Parade Highlights"
                                />
                            </div>

                            {/* Description */}
                            <div className="col-span-1 md:col-span-2">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea
                                    id="description"
                                    className="form-control"
                                    rows={3}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Enter video description..."
                                ></textarea>
                            </div>

                            {/* Video URL */}
                            <div className="col-span-1 md:col-span-2">
                                <label htmlFor="video_url" className="form-label">Video URL <span className="text-red-600">*</span></label>
                                <input
                                    type="url"
                                    id="video_url"
                                    className="form-control"
                                    value={videoUrl}
                                    onChange={(e) => setVideoUrl(e.target.value)}
                                    required
                                    placeholder="e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                />
                                <small className="form-text text-muted">Supports YouTube URLs (watch?v= or youtu.be/)</small>
                            </div>

                            {/* Sort Order */}
                            <div>
                                <label htmlFor="sort_order" className="form-label">Sort Order</label>
                                <input
                                    type="number"
                                    id="sort_order"
                                    className="form-control"
                                    value={sortOrder}
                                    onChange={(e) => setSortOrder(Number(e.target.value))}
                                    min="0"
                                    placeholder="0"
                                />
                            </div>

                            {/* Status */}
                            <div>
                                <label htmlFor="status" className="form-label">Status</label>
                                <select
                                    id="status"
                                    className="form-select"
                                    value={status}
                                    onChange={(e) => setStatus(Number(e.target.value))}
                                >
                                    <option value={1}>Active</option>
                                    <option value={0}>Inactive</option>
                                </select>
                            </div>

                            <div className="col-span-1 md:col-span-2 text-end">
                                <button type="submit" className="btn btn-primary me-2">
                                    {editingVideo ? 'Update Video' : 'Add Video'}
                                </button>
                                <button type="button" className="btn btn-secondary" onClick={resetForm}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Videos List */}
            <div className="card mt-4">
                <div className="card-header flex justify-between items-center">
                    <h5 className="card-title mb-0 flex items-center gap-2"><i className="fas fa-list text-info"></i> Current Videos</h5>
                    <span className="badge bg-primary">{videos.length} Total</span>
                </div>
                <div className="card-body p-0">
                    {isLoading && videos.length === 0 ? (
                        <div className="text-center py-5">Loading videos...</div>
                    ) : error ? (
                        <div className="text-center py-5 text-danger">{error}</div>
                    ) : videos.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
                            {videos.map((video) => (
                                <div key={video.id} className="card video-card">
                                    <img
                                        src={getThumbnailUrl(video.video_url)}
                                        alt={video.title}
                                        className="card-img-top"
                                        style={{ height: '150px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body">
                                        <h6 className="card-title" style={{ fontSize: '13px', fontWeight: '700' }}>{video.title}</h6>
                                        {video.description && <p className="card-text text-muted" style={{ fontSize: '12px' }}>{video.description.substring(0, 50)}{video.description.length > 50 ? '...' : ''}</p>}
                                    </div>
                                    <div className="card-footer d-flex justify-content-between align-items-center">
                                        <small className="text-muted">Order: {video.sort_order}</small>
                                        <span className={`badge ${video.status === 1 ? 'bg-success' : 'bg-danger'}`}>
                                            {video.status === 1 ? 'Active' : 'Inactive'}
                                        </span>
                                    </div>
                                    <div className="absolute top-2 right-2 flex gap-1 z-10">
                                        <button
                                            onClick={() => handleEdit(video)}
                                            className="btn btn-sm btn-outline-secondary"
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(video.id)}
                                            className="btn btn-sm btn-outline-danger"
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-5">
                            <i className="fas fa-video fa-3x text-muted mb-3"></i>
                            <h4>No Videos Found</h4>
                            <p>Click the button above to add your first video.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GalleryVideosPage;
