// src/app/admin/homepage/stats/page.tsx
'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

// Define types for Stat and API responses
interface Stat {
    id: string;
    _id?: string;
    number: string;
    label: string;
    icon?: string;
    sort_order: number;
    createdAt?: string;
    updatedAt?: string;
}

const StatsPage = () => {
    const [stats, setStats] = useState<Stat[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [editingStat, setEditingStat] = useState<Stat | null>(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Form states
    const [number, setNumber] = useState('');
    const [label, setLabel] = useState('');
    const [icon, setIcon] = useState('');
    const [sortOrder, setSortOrder] = useState(0);

    const API_URL = '/api/home-stats';

    // Fetch stats on component mount
    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get<Stat[]>(API_URL);
            // Add temporary IDs for frontend manipulation if not present
            const statsWithIds = response.data.map(s => ({ ...s, id: s._id || s.id || Math.random().toString() }));
            setStats(statsWithIds);
        } catch (err: any) {
            console.error('Error fetching stats:', err);
            setError('Failed to load stats. Please try again later.');
            toast.error('Failed to load stats.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const statData = {
            number,
            label,
            icon: icon || undefined,
            sort_order: Number(sortOrder),
        };

        try {
            if (editingStat) {
                // Update existing stat
                await axios.put(`${API_URL}/${editingStat.id}`, statData);
                toast.success('Stat updated successfully!');
            } else {
                // Create new stat
                await axios.post(API_URL, statData);
                toast.success('Stat added successfully!');
            }
            fetchStats(); // Refresh list
            resetForm();
        } catch (err: any) {
            console.error('Error submitting form:', err);
            setError(`Failed to ${editingStat ? 'update' : 'add'} stat.`);
            toast.error(`Failed to ${editingStat ? 'update' : 'add'} stat.`);
        } finally {
            setIsLoading(false);
        }
    };

    const handleEdit = (stat: Stat) => {
        setEditingStat(stat);
        setNumber(stat.number);
        setLabel(stat.label);
        setIcon(stat.icon || '');
        setSortOrder(stat.sort_order);
        setIsFormOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this stat?')) {
            setIsLoading(true);
            setError(null);
            try {
                await axios.delete(`${API_URL}/${id}`);
                toast.success('Stat deleted successfully!');
                fetchStats(); // Refresh list
            } catch (err: any) {
                console.error('Error deleting stat:', err);
                setError('Failed to delete stat.');
                toast.error('Failed to delete stat.');
            } finally {
                setIsLoading(false);
            }
        }
    };

    const resetForm = () => {
        setEditingStat(null);
        setNumber('');
        setLabel('');
        setIcon('');
        setSortOrder(0);
        setIsFormOpen(false);
    };

    const updateIconPreview = (iconClass: string) => {
        const previewElement = document.getElementById('iconPreview');
        const wrapElement = document.getElementById('iconPreviewWrap');
        if (previewElement && wrapElement) {
            if (iconClass && iconClass.trim()) {
                previewElement.className = `fas ${iconClass.trim()}`; // Assuming Font Awesome classes start with 'fas '
                wrapElement.style.display = 'block';
            } else {
                wrapElement.style.display = 'none';
            }
        }
    };

    useEffect(() => {
        if (icon) {
            updateIconPreview(icon);
        } else {
            document.getElementById('iconPreviewWrap')?.style.setProperty('display', 'none');
        }
    }, [icon]);


    if (isLoading && stats.length === 0) {
        return <div className="text-center py-5">Loading stats...</div>;
    }

    if (error) {
        return <div className="text-center py-5 text-danger">{error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <i className="fas fa-chart-bar text-primary"></i> Manage Stats
            </h1>

            {!isFormOpen && (
                <button onClick={() => setIsFormOpen(true)} className="btn btn-primary mb-4">
                    <i className="fas fa-plus"></i> Add New Stat
                </button>
            )}

            {isFormOpen && (
                <div className="card mb-4">
                    <div className="card-header flex justify-between items-center">
                        <h5 className="card-title mb-0 flex items-center gap-2">
                            <i className={`fas fa-${editingStat ? 'edit' : 'plus-circle'}`}></i>
                            {editingStat ? 'Edit Stat' : 'Add New Stat'}
                        </h5>
                        <button onClick={resetForm} className="btn btn-secondary btn-sm">
                            <i className="fas fa-times"></i> Close Form
                        </button>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Number */}
                            <div className="col-span-1 md:col-span-2">
                                <label htmlFor="number" className="form-label">Number / Value <span className="text-red-600">*</span></label>
                                <input
                                    type="text"
                                    id="number"
                                    className="form-control"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                    required
                                    placeholder="e.g. 500+, 95%"
                                />
                                <small className="form-text text-muted">e.g. 500+, 95%, 20+, 10+</small>
                            </div>

                            {/* Label */}
                            <div className="col-span-1 md:col-span-2">
                                <label htmlFor="label" className="form-label">Label <span className="text-red-600">*</span></label>
                                <input
                                    type="text"
                                    id="label"
                                    className="form-control"
                                    value={label}
                                    onChange={(e) => setLabel(e.target.value)}
                                    required
                                    placeholder="e.g. Students Selected"
                                />
                            </div>

                            {/* Icon */}
                            <div className="col-span-1 md:col-span-2">
                                <label htmlFor="icon" className="form-label">Font Awesome Icon Class</label>
                                <input
                                    type="text"
                                    id="icon"
                                    className="form-control"
                                    value={icon}
                                    onChange={(e) => setIcon(e.target.value)}
                                    placeholder="e.g. fas fa-user-graduate"
                                />
                                <small className="form-text text-muted">e.g. fas fa-award, fas fa-chart-line, fas fa-chalkboard-teacher</small>
                                <div id="iconPreviewWrap" style={{ display: 'none' }} className="mt-2">
                                    <span className="form-text">Preview: </span>
                                    <i id="iconPreview" style={{ fontSize: '20px', color: 'var(--primary-color)', marginLeft: '6px' }}></i>
                                </div>
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

                            <div className="col-span-1 md:col-span-2 text-end">
                                <button type="submit" className="btn btn-primary me-2">
                                    {editingStat ? 'Update Stat' : 'Add Stat'}
                                </button>
                                <button type="button" className="btn btn-secondary" onClick={resetForm}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Stats List */}
            <div className="card mt-4">
                <div className="card-header flex justify-between items-center">
                    <h5 className="card-title mb-0 flex items-center gap-2"><i className="fas fa-list text-info"></i> Current Stats</h5>
                    <span className="badge bg-primary">{stats.length} Total</span>
                </div>
                <div className="card-body p-0">
                    {isLoading && stats.length === 0 ? (
                        <div className="text-center py-5">Loading stats...</div>
                    ) : error ? (
                        <div className="text-center py-5 text-danger">{error}</div>
                    ) : stats.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table table-striped table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th style={{ width: '50px' }}>Icon</th>
                                        <th style={{ width: '80px' }}>Number</th>
                                        <th>Label</th>
                                        <th style={{ width: '60px' }}>Order</th>
                                        <th style={{ width: '90px' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stats.map((stat) => (
                                        <tr key={stat.id}>
                                            <td>
                                                {stat.icon ? (
                                                    <i className={`fas ${stat.icon}`} style={{ fontSize: '18px', color: 'var(--primary-color)' }}></i>
                                                ) : (
                                                    <span className="badge bg-secondary">—</span>
                                                )}
                                            </td>
                                            <td>
                                                <strong className="d-block" style={{ fontSize: '16px', color: 'var(--dark-color)' }}>
                                                    {stat.number}
                                                </strong>
                                            </td>
                                            <td style={{ fontSize: '13px' }}>{stat.label}</td>
                                            <td><span className="badge bg-secondary">{stat.sort_order}</span></td>
                                            <td>
                                                <div className="d-flex gap-1">
                                                    <button
                                                        onClick={() => handleEdit(stat)}
                                                        className="btn btn-sm btn-outline-secondary"
                                                    >
                                                        <i className="fas fa-edit"></i>
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(stat.id)}
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
                            <i className="fas fa-chart-bar fa-3x text-muted mb-3"></i>
                            <h4>No Stats Found</h4>
                            <p>Use the form on the left to add your first stat.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StatsPage;
