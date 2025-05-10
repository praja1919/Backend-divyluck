import React, { useState } from 'react';
import axios from 'axios';
import './userRegistartion.css'; // Optional styling

const UserRegistration = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        city: ''
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

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match!');
            setSuccess('');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/users/register', {
                name: formData.name,
                gender: formData.gender,
                phone: formData.phone,
                email: formData.email,
                password: formData.password,
                city: formData.city
            });

            if (response.status === 201) {
                setSuccess('User registered successfully!');
                setError('');
                setFormData({
                    name: '',
                    gender: '',
                    phone: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    city: ''
                });
            }
        } catch (err) {
            console.error('Registration error:', err);
            setError(err.response?.data?.message || 'Something went wrong!');
            setSuccess('');
        }
    };

    return (
        <div className="user-registration-form">
            <h2>User Registration</h2>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
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
                    <label>City</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                </div>

                <button type="submit" className="submit-btn">Register</button>
            </form>
        </div>
    );
};

export default UserRegistration;
