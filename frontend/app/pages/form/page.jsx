// components/FormComponent.js
"use client";
import { useState } from "react";
import axios from 'axios';
import Link from "next/link";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    percentage: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/students', formData);
      console.log('Student created:', response.data);
      alert('Details verified successfully!');
    } catch (error) {
      console.error('Error creating student:', error);
      alert('Error verifying details. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">Verify Your Details</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="percentage">Percentage:</label>
          <input
            type="number"
            id="percentage"
            name="percentage"
            value={formData.percentage}
            onChange={handleChange}
            required
            className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition duration-200"
        >
            <Link href="/pages/homepage">
          Add Your Details
            </Link>
        </button>
      </form>
    </div>
  </div>
  );
};

export default FormComponent;