// TailorRegistration.jsx
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
    portfolioImages: [],
    profilePicture: '',
  });

  const [portfolioImageURLs, setPortfolioImageURLs] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePortfolioImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, portfolioImages: files }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      setSuccess('');
      return;
    }

    // Combine file objects and image URLs
    let combinedPortfolio = [...formData.portfolioImages];
    if (portfolioImageURLs.trim()) {
      const urlArray = portfolioImageURLs.split(',').map(url => url.trim()).filter(url => url);
      combinedPortfolio = [...combinedPortfolio, ...urlArray];
    }

    const dataToSend = {
      ...formData,
      portfolioImages: combinedPortfolio,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/tailors/register', dataToSend);

      if (response.status === 201) {
        const tailorId = response.data._id || response.data.tailor?._id;

        setSuccess('Tailor registered successfully!');
        setError('');

        // Navigate to tailor details
        setTimeout(() => {
          navigate(`/tailordetails/${tailorId}`);
        }, 1000);

        // Reset form
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
          portfolioImages: [],
          profilePicture: '',
        });
        setPortfolioImageURLs('');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.response?.data?.error || 'Something went wrong!');
      setSuccess('');
    }
  };

  return (
    <div className="tailor-registration-form">
      <h2>Tailor Registration</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}

      <form onSubmit={handleSubmit}>
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
          { label: 'Profile Picture URL', name: 'profilePicture' },
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
          <label>Portfolio Images (upload)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePortfolioImageChange}
          />
        </div>

        <div className="form-group">
          <label>Portfolio Image URLs (comma-separated)</label>
          <input
            type="text"
            value={portfolioImageURLs}
            onChange={(e) => setPortfolioImageURLs(e.target.value)}
            placeholder="https://..., https://..."
          />
        </div>

        <button type="submit" className="submit-btn">Register Tailor</button>
      </form>
    </div>
  );
};

export default TailorRegistration;
