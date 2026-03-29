// src/app/admin/homepage/about/page.tsx
'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

// Define types for AboutContent and API responses
interface AboutContent {
    id?: string; // _id from MongoDB
    heading: string;
    subheading?: string;
    description: string;
    image?: string;
    createdAt?: string;
    updatedAt?: string;
}

interface UploadResponse {
    message: string;
    url: string;
    filename: string;
}

const AboutPage = () => {
    const [aboutContent, setAboutContent] = useState<AboutContent | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Form states
    const [heading, setHeading] = useState('');
    const [subheading, setSubtitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [currentImageUrl, setCurrentImageUrl] = useState<string | null>(null);

    const API_URL = '/api/home-about';
    const UPLOAD_URL = '/api/upload';

    useEffect(() => {
        fetchAboutContent();
    }, []);

    const fetchAboutContent = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get<AboutContent>(API_URL);
            setAboutContent(response.data);
            // Pre-fill form states
            setHeading(response.data.heading || '');
            setSubtitle(response.data.subheading || '');
            setDescription(response.data.description || '');
            setCurrentImageUrl(response.data.image || null);
        } catch (err: any) {
            console.error('Error fetching about content:', err);
            setError('Failed to load about content. Please try again later.');
            toast.error('Failed to load about content.');
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
            formData.append('folder', 'about'); // Consistent folder name

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

        const contentData = {
            heading,
            subheading: subheading || undefined,
            description,
            image: imageUrl || undefined,
        };

        try {
            // Since it's a singleton, we use POST which handles both create and update
            await axios.post(API_URL, contentData);
            toast.success('About content updated successfully!');
            fetchAboutContent(); // Refresh content to reflect changes
            resetFormStates(); // Reset form and image states after successful update
        } catch (err: any) {
            console.error('Error submitting form:', err);
            setError('Failed to update about content.');
            toast.error('Failed to update about content.');
        } finally {
            setIsLoading(false);
        }
    };

    const resetFormStates = () => {
        setImageFile(null);
        setPreviewImage(null);
        // Keep currentImageUrl to show the updated image if upload was successful
    };

    const getImageUrl = (imagePath: string | undefined): string => {
        if (!imagePath) return '/assets/images/placeholder.jpg'; // Default placeholder
        // Assuming uploads are served from /public/uploads
        return imagePath.startsWith('/') ? imagePath : `/uploads/about/${imagePath}`;
    };

    if (isLoading) {
        return <div className="text-center py-5">Loading about content...</div>;
    }

    if (error) {
        return <div className="text-center py-5 text-danger">{error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <i className="fas fa-info-circle text-primary"></i> Homepage About Section
            </h1>

            <div className="card">
                <div className="card-header flex justify-between items-center">
                    <h5 className="card-title mb-0 flex items-center gap-2">
                        <i className="fas fa-edit"></i> Edit About Section
                    </h5>
                </div>
                <div className="card-body">
                    <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Heading */}
                        <div className="col-span-1 md:col-span-2">
                            <label htmlFor="heading" className="form-label">Heading <span className="text-red-600">*</span></label>
                            <input
                                type="text"
                                id="heading"
                                className="form-control"
                                value={heading}
                                onChange={(e) => setHeading(e.target.value)}
                                required
                                placeholder="e.g. About Visakha Defence Academy"
                            />
                        </div>

                        {/* Subheading */}
                        <div className="col-span-1 md:col-span-2">
                            <label htmlFor="subheading" className="form-label">Subheading</label>
                            <input
                                type="text"
                                id="subheading"
                                className="form-control"
                                value={subheading}
                                onChange={(e) => setSubtitle(e.target.value)}
                                placeholder="e.g. Premier Defence Coaching Institute Since 2002"
                            />
                        </div>

                        {/* Description */}
                        <div className="col-span-1 md:col-span-2">
                            <label htmlFor="description" className="form-label">Description <span className="text-red-600">*</span></label>
                            <textarea
                                id="description"
                                className="form-control"
                                rows={7}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                placeholder="Enter about section description..."
                            ></textarea>
                        </div>

                        {/* Image Upload */}
                        <div className="col-span-1 md:col-span-2">
                            <label className="form-label">Section Image</label>
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
                                        alt="About Image Preview"
                                        className="img-thumbnail"
                                        style={{ maxWidth: '200px', maxHeight: '150px', objectFit: 'cover' }}
                                    />
                                </div>
                            )}
                            {!previewImage && !currentImageUrl && (
                                <small className="form-text text-muted">Upload an image (JPG, PNG, WEBP - Max 5MB)</small>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="col-span-1 md:col-span-2 text-end">
                            <button type="submit" className="btn btn-primary me-2">
                                Save About Section
                            </button>
                            <button type="button" className="btn btn-secondary" onClick={() => {
                                // Reset form states to original loaded values
                                setHeading(aboutContent?.heading || '');
                                setSubtitle(aboutContent?.subheading || '');
                                setDescription(aboutContent?.description || '');
                                setCurrentImageUrl(aboutContent?.image || null);
                                setImageFile(null);
                                setPreviewImage(null);
                            }}>
                                Reset Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Current Preview */}
            {aboutContent && (
                <div className="card mt-4">
                    <div className="card-header flex justify-between items-center">
                        <h5 className="card-title mb-0 flex items-center gap-2">
                            <i className="fas fa-eye text-info"></i> Current Preview
                        </h5>
                    </div>
                    <div className="card-body">
                        {currentImageUrl && (
                            <img
                                src={getImageUrl(currentImageUrl)}
                                alt="About Section Preview"
                                className="w-full rounded mb-3"
                                style={{ height: '160px', objectFit: 'cover' }}
                            />
                        )}

                        <h6 style={{ color: 'var(--primary-color)', fontWeight: '700' }}>
                            {heading || '—'}
                        </h6>
                        {subheading && (
                            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                                {subheading}
                            </p>
                        )}
                        <p style={{ fontSize: '12.5px', color: 'var(--dark-color)', lineHeight: '1.7' }}>
                            {description || 'No description available.'}
                        </p>

                        {aboutContent.updatedAt && (
                            <small className="form-text mt-2">
                                <i className="fas fa-clock me-1"></i>
                                Last updated: {new Date(aboutContent.updatedAt).toLocaleDateString()}
                            </small>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AboutPage;
