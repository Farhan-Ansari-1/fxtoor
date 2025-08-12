import React, { useState, useRef } from 'react';
import BrandName from '../components/BrandName.jsx';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        setStatus('Thank you for your message! We will get back to you shortly.');
        setFormData({ from_name: '', from_email: '', message: '' }); // Clear form state
      },
      (error) => {
        setStatus('Oops! Something went wrong. Please try again later.');
        console.log('EMAILJS FAILED...', error.text);
      }
    ).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact <BrandName /></h1>
      <p className="text-lg mb-6 text-center">
        If you have questions, feedback, or want to suggest a new tool, reach out to us.
      </p>

      <div className="mb-8 p-4 border rounded-lg bg-gray-50 text-center">
        <p className="mb-2">
          <strong>📧 Email:</strong> <a href="mailto:farx.root.01@gmail.com" className="text-blue-500 hover:underline">farx.root.01@gmail.com</a>
        </p>
        <p className="mb-4">
          <strong>🌐 Website:</strong> <a href="https://fxtoor.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://fxtoor.com</a>
        </p>
        <p className="text-sm text-gray-600">We usually respond within 48 hours.</p>
      </div>

      <p className="text-lg mb-6 text-center">Or, fill out the form below:</p>

      <form ref={form} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {status && (
        <p className="mt-4 text-center text-green-600">{status}</p>
      )}
    </div>
  );
};

export default ContactUs;