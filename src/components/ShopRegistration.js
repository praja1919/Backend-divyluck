import React, { useState } from 'react';
import axios from 'axios';
import './ShopRegistration.css'; // Optional styling

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
        shopImage: '',
        profileImage: '',
        logo: '',
        categories: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match!');
            setSuccess('');
            return;
        }

        try {
            // Parse categories JSON input
            const parsedCategories = JSON.parse(formData.categories);

            const response = await axios.post('http://localhost:5000/api/shops/register', {
                ...formData,
                categories: parsedCategories,
            });

            if (response.status === 201) {
                setSuccess('Shop registered successfully!');
                setError('');
                setFormData({
                    shopName: '',
                    owner: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    contact: '',
                    location: '',
                    businessLicense: '',
                    shopImage: '',
                    profileImage: '',
                    logo: '',
                    categories: '',
                });
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

                <div className="form-group">
                    <label>Shop Image URL</label>
                    <input type="text" name="shopImage" value={formData.shopImage} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Profile Image URL</label>
                    <input type="text" name="profileImage" value={formData.profileImage} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Logo URL</label>
                    <input type="text" name="logo" value={formData.logo} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Categories (in JSON format)</label>
                    <textarea
                        name="categories"
                        value={formData.categories}
                        onChange={handleChange}
                        placeholder={`Example: 
[
  {
    "categoryName": "Cotton",
    "types": [
      { "typeName": "Plain Cotton", "price": 180 }
    ]
  }
]`}
                        required
                        rows="6"
                    />
                </div>

                <button type="submit" className="submit-btn">Register Shop</button>
            </form>
        </div>
    );
};

export default ShopRegistration;
