import React, { useState } from 'react';
import axios from 'axios';

const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: ''
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.id || !formData.name || !formData.email) {
      setError('All fields are required');
      setSuccess(null);
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/users', formData);
      console.log(formData)
      setSuccess('User added successfully');
      setError(null);
      setFormData({ id: '', name: '', email: '' });
    } catch (err) {
      setError('Unable to add user');
      setSuccess(null);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create User</h2>
      {error && <div className="mb-4 p-2 bg-red-200 text-red-700">{error}</div>}
      {success && <div className="mb-4 p-2 bg-green-200 text-green-700">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">ID</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUserForm;
