// src/app/admin/homepage/banners/page.tsx
'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

// Define types for Banner and API responses
interface Banner {
    id: string;
    _id?: string;
    title: string;
    subtitle?: string;
    button_text?: string;
    button_link?: string;
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

const BannersPage = () => {
    const [banners, setBanners] = useState<Banner[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [editingBanner, setEditingBanner] = useState<Banner | null>(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Form states
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [buttonLink, setButtonLink] = useState('');
    const [sortOrder, setSortOrder] = useState(0);
    const [status, setStatus] = useState(1);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [currentImageUrl, setCurrentImageUrl] = useState<string | null>(null);

    const API_URL = '/api/home-banners';
    const UPLOAD_URL = '/api/upload';

    // Fetch banners on component mount
    useEffect(() => {
        fetchBanners();
    }, []);

    const fetchBanners = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get<Banner[]>(API_URL);
            // Add temporary IDs for frontend manipulation if not present
            const bannersWithIds = response.data.map(b => ({ ...b, id: b._id || b.id || Math.random().toString() }));
            setBanners(bannersWithIds);
        } catch (err: any) {
            console.error('Error fetching banners:', err);
            setError('Failed to load banners. Please try again later.');
            toast.error('Failed to load banners.');
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
            formData.append('folder', 'homepage-banners'); // Consistent folder name

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

        const bannerData = {
            title,
            subtitle: subtitle || undefined,
            button_text: buttonText || undefined,
            button_link: buttonLink || undefined,
            image: imageUrl || undefined,
            sort_order: Number(sortOrder),
            status: Number(status),
        };

        try {
            if (editingBanner) {
                // Update existing banner
                await axios.put(`${API_URL}/${editingBanner.id}`, bannerData);
                toast.success('Banner updated successfully!');
            } else {
                // Create new banner
                await axios.post(API_URL, bannerData);
                toast.success('Banner added successfully!');
            }
            fetchBanners(); // Refresh list
            resetForm();
        } catch (err: any) {
            console.error('Error submitting form:', err);
            setError(`Failed to ${editingBanner ? 'update' : 'add'} banner.`);
            toast.error(`Failed to ${editingBanner ? 'update' : 'add'} banner.`);
        } finally {
            setIsLoading(false);
        }
    };

    const handleEdit = (banner: Banner) => {
        setEditingBanner(banner);
        setTitle(banner.title);
        setSubtitle(banner.subtitle || '');
        setButtonText(banner.button_text || '');
        setButtonLink(banner.button_link || '');
        setSortOrder(banner.sort_order);
        setStatus(banner.status);
        setCurrentImageUrl(banner.image); // Set current image URL for preview
        setPreviewImage(null); // Clear preview image
        setImageFile(null); // Clear selected file
        setIsFormOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this banner?')) {
            setIsLoading(true);
            setError(null);
            try {
                await axios.delete(`${API_URL}/${id}`);
                toast.success('Banner deleted successfully!');
                fetchBanners(); // Refresh list
            } catch (err: any) {
                console.error('Error deleting banner:', err);
                setError('Failed to delete banner.');
                toast.error('Failed to delete banner.');
            } finally {
                setIsLoading(false);
            }
        }
    };

    const resetForm = () => {
        setEditingBanner(null);
        setTitle('');
        setSubtitle('');
        setButtonText('');
        setButtonLink('');
        setSortOrder(0);
        setStatus(1);
        setImageFile(null);
        setPreviewImage(null);
        setCurrentImageUrl(null);
        setIsFormOpen(false);
    };

    const getImageUrl = (imagePath: string | undefined): string => {
        if (!imagePath) return '/assets/images/placeholder.jpg'; // Default placeholder
        // Assuming uploads are served from /public/uploads
        return imagePath.startsWith('/') ? imagePath : `/uploads/homepage-banners/${imagePath}`;
    };

    if (isLoading && banners.length === 0) {
        return <div className="text-center py-5">Loading banners...</div>;
    }

    if (error) {
        return <div className="text-center py-5 text-danger">{error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <i className="fas fa-images text-primary"></i> Manage Banners
            </h1>

            {!isFormOpen && (
                <button onClick={() => setIsFormOpen(true)} className="btn btn-primary mb-4">
                    <i className="fas fa-plus"></i> Add New Banner
                </button>
            )}

            {isFormOpen && (
                <div className="card mb-4">
                    <div className="card-header flex justify-between items-center">
                        <h5 className="card-title mb-0 flex items-center gap-2">
                            <i className={`fas fa-${editingBanner ? 'edit' : 'plus-circle'}`}></i>
                            {editingBanner ? 'Edit Banner' : 'Add New Banner'}
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
                                    placeholder="e.g. Welcome to Visakha Defence Academy"
                                />
                            </div>

                            {/* Subtitle */}
                            <div className="col-span-1 md:col-span-2">
                                <label htmlFor="subtitle" className="form-label">Subtitle</label>
                                <input
                                    type="text"
                                    id="subtitle"
                                    className="form-control"
                                    value={subtitle}
                                    onChange={(e) => setSubtitle(e.target.value)}
                                    placeholder="e.g. Your journey to serve the nation starts here"
                                />
                            </div>

                            {/* Button Text */}
                            <div>
                                <label htmlFor="button_text" className="form-label">Button Text</label>
                                <input
                                    type="text"
                                    id="button_text"
                                    className="form-control"
                                    value={buttonText}
                                    onChange={(e) => setButtonText(e.target.value)}
                                    placeholder="e.g. Explore Courses"
                                />
                            </div>

                            {/* Button Link */}
                            <div>
                                <label htmlFor="button_link" className="form-label">Button Link</label>
                                <input
                                    type="text"
                                    id="button_link"
                                    className="form-control"
                                    value={buttonLink}
                                    onChange={(e) => setButtonLink(e.target.value)}
                                    placeholder="e.g. course, contact"
                                />
                                <small className="form-text text-muted">Enter relative path (e.g., 'course', 'contact')</small>
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
                                <label className="form-label">Banner Image</label>
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
                                            alt="Banner Preview"
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
                                    {editingBanner ? 'Update Banner' : 'Add Banner'}
                                </button>
                                <button type="button" className="btn btn-secondary" onClick={resetForm}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Banners List */}
            <div className="card mt-4">
                <div className="card-header flex justify-between items-center">
                    <h5 className="card-title mb-0 flex items-center gap-2">
                        <i className="fas fa-images text-info"></i> Current Banners
                    </h5>
                    <span className="badge bg-primary">{banners.length} Total</span>
                </div>
                <div className="card-body p-0">
                    {isLoading && banners.length === 0 ? (
                        <div className="text-center py-5">Loading banners...</div>
                    ) : error ? (
                        <div className="text-center py-5 text-danger">{error}</div>
                    ) : banners.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table table-striped table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th style={{ width: '40px' }}>#</th>
                                        <th style={{ width: '90px' }}>Image</th>
                                        <th>Title</th>
                                        <th>Subtitle</th>
                                        <th style={{ width: '100px' }}>Button</th>
                                        <th style={{ width: '60px' }}>Order</th>
                                        <th style={{ width: '70px' }}>Status</th>
                                        <th style={{ width: '110px' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {banners.map((banner, index) => (
                                        <tr key={banner.id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <img
                                                    src={getImageUrl(banner.image)}
                                                    alt={banner.title}
                                                    className="img-thumbnail"
                                                    style={{ maxWidth: '80px', maxHeight: '60px', objectFit: 'cover' }}
                                                />
                                            </td>
                                            <td>
                                                <strong className="d-block" style={{ fontSize: '13px' }}>{banner.title}</strong>
                                            </td>
                                            <td>
                                                <small className="text-muted">
                                                    {banner.subtitle ? banner.subtitle.substring(0, 40) + (banner.subtitle.length > 40 ? '...' : '') : '-'}
                                                </small>
                                            </td>
                                            <td>
                                                {banner.button_text ? (
                                                    <span className="badge bg-info">{banner.button_text}</span>
                                                ) : (
                                                    <span className="badge bg-secondary">No Button</span>
                                                )}
                                            </td>
                                            <td>{banner.sort_order}</td>
                                            <td>
                                                <span className={`badge ${banner.status === 1 ? 'bg-success' : 'bg-danger'}`}>
                                                    {banner.status === 1 ? 'Active' : 'Inactive'}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="d-flex gap-1">
                                                    <button
                                                        onClick={() => handleEdit(banner)}
                                                        className="btn btn-sm btn-outline-secondary"
                                                    >
                                                        <i className="fas fa-edit"></i>
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(banner.id)}
                                                        className="btn btn-sm btn-outline-danger"
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="text-center py-5">
                            <i className="fas fa-images fa-3x text-muted mb-3"></i>
                            <h4>No Banners Found</h4>
                            <p>Click the button above to add your first banner.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BannersPage;
