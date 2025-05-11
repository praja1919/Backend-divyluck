import React, { useState } from 'react';
import axios from 'axios';
import './tailorRej.css'; // Optional: your CSS file

const TailorRegistration = () => {
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
    portfolioImages: [], // Array to hold portfolio image URLs or files
    profilePicture: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePortfolioImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, portfolioImages: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      setSuccess('');
      return;
    }

    // Convert file list to URLs (if files are selected) or leave it as is
    let parsedPortfolio = formData.portfolioImages.map((file) =>
      file instanceof File ? URL.createObjectURL(file) : file
    );

    try {
      const response = await axios.post('http://localhost:5000/api/tailors/register', {
        ...formData,
        portfolioImages: parsedPortfolio,
      });

      if (response.status === 201) {
        setSuccess('Tailor registered successfully!');
        setError('');
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

        {/* Portfolio Images Section */}
        <div className="form-group">
          <label>Portfolio Images (Select multiple files or enter URLs)</label>
          <input
            type="file"
            name="portfolioImages"
            accept="image/*"
            multiple
            onChange={handlePortfolioImageChange}
          />
          <p>Or enter URLs (separate with commas):</p>
          <input
            type="text"
            name="portfolioImagesUrls"
            placeholder="Enter image URLs, separated by commas"
            onChange={(e) => {
              const urls = e.target.value.split(',').map(url => url.trim());
              setFormData({ ...formData, portfolioImages: urls });
            }}
          />
        </div>

        <button type="submit" className="submit-btn">Register Tailor</button>
      </form>
    </div>
  );
};

export default TailorRegistration;
