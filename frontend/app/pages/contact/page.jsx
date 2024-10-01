"use client";
import React, { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';


const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen">
        
        <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800">
          <header className="text-center mb-10 bg-orange-500 p-6 rounded-lg">
            <h1 className="text-white text-4xl font-bold">Contact Us</h1>
            <p className="text-white mt-2">We’re here to help! Reach out with any questions.</p>
          </header>

          <section className="mb-10">
            <h2 className="text-blue-500 text-2xl font-semibold">Contact Information</h2>
            <div className="mt-4">
              <p className="mb-2"><strong>Name:</strong> Gunjan Ghate</p>
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:ghategunjan@gmail.com" className="text-blue-600 underline">ghategunjan@gmail.com</a></p>
              <p className="mb-2"><strong>Phone:</strong> 8983885899</p>
            </div>
          </section>

          <section>
            <h2 className="text-blue-500 text-2xl font-semibold">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="4"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
