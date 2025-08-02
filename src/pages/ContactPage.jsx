import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real application, this would send the form data to a server
    // For now, we'll just simulate a successful submission
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields.'
      });
      return;
    }
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Your message has been sent successfully. We will get back to you soon!'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="trine-title text-5xl mb-4 text-white">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Have questions or want to get in touch with the TRINE team? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="trine-title text-3xl mb-6 text-white">Get In Touch</h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-gray-900 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="trine-subtitle text-xl mb-2 text-white">Email</h3>
                <div className="space-y-1">
                  <p className="text-gray-300">
                    <span className="text-accent">General Inquiries:</span>{' '}
                    <a href="mailto:contact@trine.studio" className="hover:text-accent">contact@trineai.studio</a>
                  </p>
                  <p className="text-gray-300">
                    <span className="text-accent">Artist Submissions:</span>{' '}
                    <a href="mailto:submissions@trine.studio" className="hover:text-accent">submissions@trineai.studio</a>
                  </p>
                  <p className="text-gray-300">
                    <span className="text-accent">Management:</span>{' '}
                    <a href="mailto:manager@trine.studio" className="hover:text-accent">manager@trineai.studio</a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-gray-900 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <div>
                <h3 className="trine-subtitle text-xl mb-2 text-white">Connect</h3>
                <div className="flex space-x-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-gray-900 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="trine-subtitle text-xl mb-2 text-white">Office Hours</h3>
                <p className="text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-300">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="trine-subtitle text-xl mb-4 text-white">For Artist Submissions</h3>
            <p className="text-gray-300 mb-4">
              If you're an artist looking to submit your music to TRINE, please use our dedicated submission form for a faster response.
            </p>
            <a href="/submit" className="text-accent hover:underline">Go to Submission Form →</a>
          </div>
        </div>
        
        {/* Contact Form */}
        <div>
          <h2 className="trine-title text-3xl mb-6 text-white">Send a Message</h2>
          
          {formStatus.submitted ? (
            <div className="bg-green-900/30 border border-green-500 text-green-300 p-4 rounded-lg">
              <p>{formStatus.message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {formStatus.error && (
                <div className="bg-red-900/30 border border-red-500 text-red-300 p-4 rounded-lg">
                  <p>{formStatus.message}</p>
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="trine-button w-full"
              >
                Send Message
              </button>
              
              <p className="text-gray-400 text-sm">
                * Required fields
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

