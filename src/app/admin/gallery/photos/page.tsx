// src/app/admin/gallery/photos/page.tsx
'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

// Define types for GalleryPhoto and API responses
interface GalleryPhoto {
    id: string;
    _id?: string;
    title: string;
    description?: string;
    image: string;
    sort_order: number;
    status: number;
    createdAt?: string;
    updatedAt?: string;
}

interface UploadResponse {
    message: string;
    url: string;
    filename: string;
}

const GalleryPhotosPage = () => {
    const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [editingPhoto, setEditingPhoto] = useState<GalleryPhoto | null>(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Form states
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [currentImageUrl, setCurrentImageUrl] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState(0);
    const [status, setStatus] = useState(1);

    const API_URL = '/api/gallery/photos';
    const UPLOAD_URL = '/api/upload';

    useEffect(() => {
        fetchPhotos();
    }, []);

    const fetchPhotos = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get<GalleryPhoto[]>(API_URL);
            const photosWithIds = response.data.map(p => ({ ...p, id: p._id || p.id || Math.random().toString() }));
            setPhotos(photosWithIds);
        } catch (err: any) {
            console.error('Error fetching photos:', err);
            setError('Failed to load photos. Please try again later.');
            toast.error('Failed to load photos.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        let imageUrl = currentImageUrl;

        // Upload image if a new file is selected
        if (imageFile) {
            const formData = new FormData();
            formData.append('file', imageFile);
            formData.append('folder', 'gallery/photos'); // Consistent folder name

            try {
                const uploadRes = await axios.post<UploadResponse>(UPLOAD_URL, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                imageUrl = uploadRes.data.url;
            } catch (uploadErr: any) {
                console.error('Error uploading image:', uploadErr);
                setError('Image upload failed.');
                toast.error('Image upload failed.');
                setIsLoading(false);
                return;
            }
        }

        const photoData = {
            title,
            description: description || undefined,
            image: imageUrl || undefined,
            sort_order: Number(sortOrder),
            status: Number(status),
        };

        try {
            if (editingPhoto) {
                // Update existing photo
                await axios.put(`${API_URL}/${editingPhoto.id}`, photoData);
                toast.success('Photo updated successfully!');
            } else {
                // Create new photo
                await axios.post(API_URL, photoData);
                toast.success('Photo added successfully!');
            }
            fetchPhotos(); // Refresh list
            resetForm();
        } catch (err: any) {
            console.error('Error submitting form:', err);
            setError(`Failed to ${editingPhoto ? 'update' : 'add'} photo.`);
            toast.error(`Failed to ${editingPhoto ? 'update' : 'add'} photo.`);
        } finally {
            setIsLoading(false);
        }
    };

    const handleEdit = (photo: GalleryPhoto) => {
        setEditingPhoto(photo);
        setTitle(photo.title);
        setDescription(photo.description || '');
        setCurrentImageUrl(photo.image || null);
        setSortOrder(photo.sort_order);
        setStatus(photo.status);
        setImageFile(null); // Clear selected file on edit
        setPreviewImage(null); // Clear preview image on edit
        setIsFormOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this photo?')) {
            setIsLoading(true);
            setError(null);
            try {
                await axios.delete(`${API_URL}/${id}`);
                toast.success('Photo deleted successfully!');
                fetchPhotos(); // Refresh list
            } catch (err: any) {
                console.error('Error deleting photo:', err);
                setError('Failed to delete photo.');
                toast.error('Failed to delete photo.');
            } finally {
                setIsLoading(false);
            }
        }
    };

    const resetForm = () => {
        setEditingPhoto(null);
        setTitle('');
        setDescription('');
        setImageFile(null);
        setPreviewImage(null);
        setCurrentImageUrl(null);
        setSortOrder(0);
        setStatus(1);
        setIsFormOpen(false);
    };

    const getImageUrl = (imagePath: string | undefined): string => {
        if (!imagePath) return '/assets/images/placeholder.jpg'; // Default placeholder
        return imagePath.startsWith('/') ? imagePath : `/uploads/gallery/photos/${imagePath}`;
    };

    if (isLoading && photos.length === 0) {
        return <div className="text-center py-5">Loading photos...</div>;
    }

    if (error) {
        return <div className="text-center py-5 text-danger">{error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <i className="fas fa-camera text-primary"></i> Manage Gallery Photos
            </h1>

            {!isFormOpen && (
                <button onClick={() => setIsFormOpen(true)} className="btn btn-primary mb-4">
                    <i className="fas fa-plus"></i> Add New Photo
                </button>
            )}

            {isFormOpen && (
                <div className="card mb-4">
                    <div className="card-header flex justify-between items-center">
                        <h5 className="card-title mb-0 flex items-center gap-2">
                            <i className={`fas fa-${editingPhoto ? 'edit' : 'plus-circle'}`}></i>
                            {editingPhoto ? 'Edit Photo' : 'Add New Photo'}
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
                                    placeholder="e.g. Passing Out Parade"
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
                                    placeholder="Enter photo description..."
                                ></textarea>
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

                            {/* Image Upload */}
                            <div className="col-span-1 md:col-span-2">
                                <label className="form-label">Photo</label>
                                <input
                                    type="file"
                                    className="form-control mb-2"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                                {(previewImage || currentImageUrl) && (
                                    <div className="mt-2">
                                        <img
                                            src={previewImage || getImageUrl(currentImageUrl!)}
                                            alt="Photo Preview"
                                            className="img-thumbnail"
                                            style={{ maxWidth: '200px', maxHeight: '150px', objectFit: 'cover' }}
                                        />
                                    </div>
                                )}
                                {!previewImage && !currentImageUrl && (
                                    <small className="form-text text-muted">Upload an image (JPG, PNG, WEBP - Max 5MB)</small>
                                )}
                            </div>

                            <div className="col-span-1 md:col-span-2 text-end">
                                <button type="submit" className="btn btn-primary me-2">
                                    {editingPhoto ? 'Update Photo' : 'Add Photo'}
                                </button>
                                <button type="button" className="btn btn-secondary" onClick={resetForm}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Photos List */}
            <div className="card mt-4">
                <div className="card-header flex justify-between items-center">
                    <h5 className="card-title mb-0 flex items-center gap-2"><i className="fas fa-list text-info"></i> Current Photos</h5>
                    <span className="badge bg-primary">{photos.length} Total</span>
                </div>
                <div className="card-body p-0">
                    {isLoading && photos.length === 0 ? (
                        <div className="text-center py-5">Loading photos...</div>
                    ) : error ? (
                        <div className="text-center py-5 text-danger">{error}</div>
                    ) : photos.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                            {photos.map((photo) => (
                                <div key={photo.id} className="card photo-card">
                                    <img
                                        src={getImageUrl(photo.image)}
                                        alt={photo.title}
                                        className="card-img-top"
                                        style={{ height: '150px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body">
                                        <h6 className="card-title" style={{ fontSize: '13px', fontWeight: '700' }}>{photo.title}</h6>
                                        {photo.description && <p className="card-text text-muted" style={{ fontSize: '12px' }}>{photo.description.substring(0, 50)}{photo.description.length > 50 ? '...' : ''}</p>}
                                    </div>
                                    <div className="card-footer d-flex justify-content-between align-items-center">
                                        <small className="text-muted">Order: {photo.sort_order}</small>
                                        <span className={`badge ${photo.status === 1 ? 'bg-success' : 'bg-secondary'}`}>
                                            {photo.status === 1 ? 'Active' : 'Inactive'}
                                        </span>
                                    </div>
                                    <div className="absolute top-2 right-2 flex gap-1 z-10">
                                        <button
                                            onClick={() => handleEdit(photo)}
                                            className="btn btn-sm btn-outline-secondary"
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(photo.id)}
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
                            <i className="fas fa-camera fa-3x text-muted mb-3"></i>
                            <h4>No Photos Found</h4>
                            <p>Click the button above to add your first photo.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GalleryPhotosPage;
