import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    passwordRepeat: '',
    role: '',
    profilePictureUrl: '',
    phoneNumber: '',
  });

  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(
      'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/register',
      formData,
      {
        headers: {
          'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c',
        },
      },
    )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
        setError(error.response.data);
      });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setError(null);
  }, [formData]);

  return (
    <form onSubmit={handleSubmit}>
      {/* {error && <p>{error.message}</p>} */}
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label htmlFor="password">Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} required />

      <label htmlFor="passwordRepeat">Repeat Password:</label>
      <input type="password" name="passwordRepeat" value={formData.passwordRepeat} onChange={handleChange} required />

      <label htmlFor="role">Role:</label>
      <input type="text" name="role" value={formData.role} onChange={handleChange} required />

      <label htmlFor="profilePictureUrl">Profile Picture URL:</label>
      <input type="url" name="profilePictureUrl" value={formData.profilePictureUrl} onChange={handleChange} required />

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;