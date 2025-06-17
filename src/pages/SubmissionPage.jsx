// SubmissionPage.jsx - Full JSX component with drag-and-drop upload sections replaced by link inputs only

import React, { useState } from 'react';

const SubmissionPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    artistName: '', aliases: '', contactName: '', contactEmail: '', contactPhone: '', location: '', genres: '', pronouns: '',
    submissionType: '', trackTitles: '', productionDetails: '', aiEngines: '', humanVsAiPercentage: '', workflow: '', masteringStatus: '',
    shortBio: '', longBio: '', socialSpotify: '', socialSoundcloud: '', socialYoutube: '', socialBandcamp: '', socialInstagram: '', socialTwitter: '', socialFacebook: '', monthlyListeners: '',
    ownershipDeclaration: false, publishingInfo: '', licensePreference: '', drmAllowed: false, agreementCheckbox: false,
    artistWebsite: '', pressQuote: '', influences: '', socialInitiative: '', feedbackRequest: false,
    trackLinks: '', artworkLinks: '', logoLink: ''
  });

  const [formStatus, setFormStatus] = useState({ submitted: false, error: false, message: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const nextStep = () => { setCurrentStep(prev => prev + 1); window.scrollTo(0, 0); };
  const prevStep = () => { setCurrentStep(prev => prev - 1); window.scrollTo(0, 0); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.artistName || !formData.contactEmail || !formData.agreementCheckbox) {
      setFormStatus({ submitted: false, error: true, message: 'Please fill out all required fields and agree to the terms.' });
      return;
    }
    setFormStatus({ submitted: true, error: false, message: 'Your submission has been received! We will review your music and get back to you within 4-6 weeks.' });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="trine-subtitle text-2xl text-white">1. Artist & Contact Info</h2>
            {/* Add your input fields for artist name, contact info, genres, etc. */}
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="trine-subtitle text-2xl text-white">2. Music & Technical Details</h2>
            {/* Other fields here */}
            <div>
              <label htmlFor="trackLinks" className="block text-white mb-2">Track Download Links *</label>
              <textarea
                id="trackLinks"
                name="trackLinks"
                value={formData.trackLinks}
                onChange={handleChange}
                rows="3"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Paste Dropbox/Drive/WeTransfer/SoundCloud URLs here"
                required
              ></textarea>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="trine-subtitle text-2xl text-white">3. Artist Profile & Story</h2>
            {/* Other fields here */}
            <div>
              <label htmlFor="artworkLinks" className="block text-white mb-2">Artwork Download Links *</label>
              <textarea
                id="artworkLinks"
                name="artworkLinks"
                value={formData.artworkLinks}
                onChange={handleChange}
                rows="2"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Paste Google Drive / Dropbox URLs here"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="logoLink" className="block text-white mb-2">Logo Link (Transparent PNG)</label>
              <input
                type="url"
                id="logoLink"
                name="logoLink"
                value={formData.logoLink}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="https://drive.google.com/yourfile"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="trine-title text-5xl mb-4 text-white">Submit Your Music</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Join the movement — where human vision meets machine precision. We're accepting submissions from serious AI-driven producers ready to redefine the future of sound.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {formStatus.submitted ? (
          <div className="bg-green-900/30 border border-green-500 text-green-300 p-8 rounded-lg text-center">
            <h2 className="trine-title text-2xl mb-4 text-white">Submission Received!</h2>
            <p className="mb-6">{formStatus.message}</p>
            <a href="/" className="trine-button inline-block">Back to Home</a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-black/50 border border-gray-800 rounded-lg p-8">
            {renderStep()}
            <div className="mt-8 flex justify-between">
              {currentStep > 1 && (
                <button type="button" onClick={prevStep} className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
                  Previous
                </button>
              )}
              {currentStep < 5 ? (
                <button type="button" onClick={nextStep} className="trine-button">
                  Next Step
                </button>
              ) : (
                <button type="submit" className="trine-button">
                  Submit Application
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SubmissionPage;
