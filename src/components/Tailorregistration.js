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
    portfolioImages: '', // JSON array as string
    profilePicture: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      setSuccess('');
      return;
    }

    try {
      const parsedPortfolio = JSON.parse(formData.portfolioImages); // Parse image URLs

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
          portfolioImages: '',
          profilePicture: '',
        });
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.response?.data?.message || 'Something went wrong!');
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
          <label>Portfolio Images (in JSON array format)</label>
          <textarea
            name="portfolioImages"
            value={formData.portfolioImages}
            onChange={handleChange}
            placeholder={`Example:\n["image1.jpg", "image2.jpg"]`}
            required
            rows="4"
          />
        </div>

        <button type="submit" className="submit-btn">Register Tailor</button>
      </form>
    </div>
  );
};

export default TailorRegistration;
