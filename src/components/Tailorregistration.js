import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './tailorRej.css';

const TailorRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    shopName: '',
    tailorType: '',
    experience: '',
    specialty: '',
    city: '',
    location: '',
    pricingModel: '',
    profilePicture: null,
    portfolioImages: [],
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfilePictureChange = (e) => {
    setFormData((prev) => ({ ...prev, profilePicture: e.target.files[0] }));
  };

  const handlePortfolioImageChange = (e) => {
    setFormData((prev) => ({ ...prev, portfolioImages: Array.from(e.target.files) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      setSuccess('');
      return;
    }

    try {
      const data = new FormData();

      // Append all fields except files
      for (const key in formData) {
        if (key === 'profilePicture' && formData.profilePicture) {
          data.append('profilePicture', formData.profilePicture);
        } else if (key === 'portfolioImages' && formData.portfolioImages.length > 0) {
          formData.portfolioImages.forEach((file) => {
            data.append('portfolioImages', file);
          });
        } else if (key !== 'confirmPassword' && key !== 'profilePicture' && key !== 'portfolioImages') {
          data.append(key, formData[key]);
        }
      }

      const response = await axios.post('http://localhost:5000/api/tailors/register', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 201) {
        setSuccess('Tailor registered successfully!');
        setError('');
        // Navigate to tailor details page (if applicable)
        setTimeout(() => {
          navigate(`/tailordetails/${response.data._id}`);
        }, 1000);

        setFormData({
          name: '',
          gender: '',
          phone: '',
          email: '',
          password: '',
          confirmPassword: '',
          shopName: '',
          tailorType: '',
          experience: '',
          specialty: '',
          city: '',
          location: '',
          pricingModel: '',
          profilePicture: null,
          portfolioImages: [],
        });
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong!');
      setSuccess('');
    }
  };

  return (
    <div className="tailor-registration-form">
      <h2>Tailor Registration</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {[
          { label: 'Name', name: 'name' },
          { label: 'Gender', name: 'gender' },
          { label: 'Phone', name: 'phone' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Password', name: 'password', type: 'password' },
          { label: 'Confirm Password', name: 'confirmPassword', type: 'password' },
          { label: 'Shop Name', name: 'shopName' },
          { label: 'Tailor Type', name: 'tailorType' },
          { label: 'Experience (Years)', name: 'experience', type: 'number' },
          { label: 'Specialty', name: 'specialty' },
          { label: 'City', name: 'city' },
          { label: 'Location', name: 'location' },
          { label: 'Pricing Model', name: 'pricingModel' },
        ].map(({ label, name, type = 'text' }) => (
          <div className="form-group" key={name}>
            <label>{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <div className="form-group">
          <label>Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            required
          />
        </div>

       

        <button type="submit" className="submit-btn">
          Register Tailor
        </button>
      </form>
    </div>
  );
};

export default TailorRegistration;
