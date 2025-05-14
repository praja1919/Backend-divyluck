import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ShopRegistration.css';

const ShopRegistration = () => {
    const [formData, setFormData] = useState({
        shopName: '',
        owner: '',
        email: '',
        password: '',
        confirmPassword: '',
        contact: '',
        location: '',
        businessLicense: '',
    });

    const [files, setFiles] = useState({
        shopImage: null,
        profileImage: null,
        logo: null
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setFiles({
            ...files,
            [e.target.name]: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Custom Validation for Required Fields
        if (!formData.shopName || !formData.owner || !formData.email || !formData.password || !formData.confirmPassword || !formData.contact || !formData.location || !formData.businessLicense || !files.shopImage || !files.profileImage || !files.logo) {
            setError('All fields are required.');
            setSuccess('');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match!');
            setSuccess('');
            return;
        }

        const data = new FormData();

        // Append text fields
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });

        // Append file fields
        data.append('shopImage', files.shopImage);
        data.append('profileImage', files.profileImage);
        data.append('logo', files.logo);

        try {
            const response = await axios.post('http://localhost:5000/api/shops/register', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 201) {
                setSuccess('Shop registered successfully!');
                setError('');
                alert('Shop registered successfully!');
                navigate('/shop/login');
            }
        } catch (err) {
            console.error('Registration error:', err);
            setError(err.response?.data?.message || 'Something went wrong!');
            setSuccess('');
        }
    };

    return (
        <div className="shop-registration-form">
            <h2>Shop Registration</h2>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                    <label>Shop Name</label>
                    <input type="text" name="shopName" value={formData.shopName} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Owner Name</label>
                    <input type="text" name="owner" value={formData.owner} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Contact</label>
                    <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Location</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Business License</label>
                    <input type="text" name="businessLicense" value={formData.businessLicense} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Shop Image</label>
                    <input type="file" name="shopImage" onChange={handleFileChange} required />
                </div>

                <div className="form-group">
                    <label>Profile Image</label>
                    <input type="file" name="profileImage" onChange={handleFileChange} required />
                </div>

                <div className="form-group">
                    <label>Logo</label>
                    <input type="file" name="logo" onChange={handleFileChange} required />
                </div>

                <button type="submit" className="submit-btn">Register Shop</button>
            </form>
        </div>
    );
};

export default ShopRegistration;
