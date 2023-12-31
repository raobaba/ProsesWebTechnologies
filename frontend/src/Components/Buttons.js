import React, { useState } from 'react';
import { handleSubmit } from '../api.js';
import '../App.css';

export default function Buttons() {
  const initialFormData = {
    username: '',
    mobile: '',
    email: '',
    address: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    await handleSubmit(formData);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value
    });
  };

  return (
    <div className='button'>
      <form className="todo-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            required
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile No</label>
          <input
            type="number"
            id="mobile"
            maxLength={10}
            minLength={10}
            placeholder="Enter mobile"
            required
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            required
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
