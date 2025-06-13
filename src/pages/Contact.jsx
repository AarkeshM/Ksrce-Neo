
import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">Contact Us</h1>
      <p className="text-center text-lg mb-4">We’d love to hear from you!</p>
       <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border border-gray-300 rounded"
          rows="4"
        ></textarea>
        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Send Message
        </button>
      </form>
    </div>
  );
}
