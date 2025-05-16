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

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

 const handleSubmit = async (e) => {
    e.preventDefault();

    const {
        shopName,
        owner,
        email,
        password,
        confirmPassword,
        contact,
        location,
        businessLicense
    } = formData;

    if (!shopName || !owner || !email || !password || !confirmPassword || !contact || !location || !businessLicense) {
        setError('All fields are required.');
        setSuccess('');
        return;
    }

    if (password !== confirmPassword) {
        setError('Passwords do not match!');
        setSuccess('');
        return;
    }

    try {
        const response = await axios.post('http://localhost:5000/api/shops/register', formData);

        if (response.status === 201) {
            const newShopId = response.data.shop._id; // Adjust based on your backend response structure
            setSuccess('Shop registered successfully!');
            setError('');
            alert('Shop registered successfully!');
            navigate(`/shopimages/${newShopId}`); // ✅ Redirect to shop images page
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

            <form onSubmit={handleSubmit}>
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

                <button type="submit" className="submit-btn">Register Shop</button>
            </form>
        </div>
    );
};

export default ShopRegistration;
