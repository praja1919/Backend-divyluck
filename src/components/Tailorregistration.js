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
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      // Send data to backend (exclude confirmPassword if backend doesn't need it)
      const { confirmPassword, ...dataToSend } = formData;
      const response = await axios.post('http://localhost:5000/api/tailors/register', dataToSend);

      if (response.status === 201) {
        setSuccess('Tailor registered successfully!');
        setError('');

        // Clear form
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
        });

        // Get the tailor ID from response - assuming backend sends saved tailor in response.data.tailor or response.data
        const tailorId = response.data._id || response.data.tailor?._id;

        if (tailorId) {
          // Navigate to tailor details page with ID
          navigate(`/tailordetails/${tailorId}`);
        } else {
          setError('Tailor ID not returned by server.');
        }
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

      <form onSubmit={handleSubmit} noValidate>
        {[
          { label: 'Name', name: 'name' },
          { label: 'Gender', name: 'gender' },
          { label: 'Phone', name: 'phone' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Password', name: 'password', type: 'password' },
          { label: 'Confirm Password', name: 'confirmPassword', type: 'password' },
          { label: 'Shop Name', name: 'shopName' },
          { label: 'Tailor Type', name: 'tailorType' },
          { label: 'Experience (Years)', name: 'experience', type: 'number', min: 0 },
          { label: 'Specialty', name: 'specialty' },
          { label: 'City', name: 'city' },
          { label: 'Location', name: 'location' },
          { label: 'Pricing Model', name: 'pricingModel' },
        ].map(({ label, name, type = 'text', min }) => (
          <div className="form-group" key={name}>
            <label htmlFor={name}>{label}</label>
            <input
              id={name}
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              min={min}
            />
          </div>
        ))}

        <button type="submit" className="submit-btn">
          Register Tailor
        </button>
      </form>
    </div>
  );
};

export default TailorRegistration;
