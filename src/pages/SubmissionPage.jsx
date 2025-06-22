import React, { useState } from 'react';

const SubmissionPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Artist/Project Info
    artistName: '',
    aliases: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    location: '',
    genres: '',
    pronouns: '',

    // Music & Technical Details
    submissionType: '',
    trackTitles: '',
    productionDetails: '',
    aiEngines: '',
    humanVsAiPercentage: '',
    workflow: '',
    masteringStatus: '',

    // Artist Profile & Story
    shortBio: '',
    longBio: '',
    trackDownloadLinks: '',
    artworkDownloadLinks: '',
    logoLink: '',
    socialSpotify: '',
    socialSoundcloud: '',
    socialYoutube: '',
    socialBandcamp: '',
    socialInstagram: '',
    socialTwitter: '',
    socialFacebook: '',
    monthlyListeners: '',

    // File upload fields - kept for backend but not used in UI
    musicFilesUrl: '',
    pressPhotosUrl: '',

    // Legal & Rights
    ownershipDeclaration: false,
    publishingInfo: '',
    licensePreference: '',
    drmAllowed: false,
    agreementCheckbox: false,

    // Optional Extras
    artistWebsite: '',
    pressQuote: '',
    influences: '',
    socialInitiative: '',
    feedbackRequest: false,
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString()
    })
      .then(() =>
        setFormStatus({
          submitted: true,
          error: false,
          message:
            'Your submission has been received! We will review your music and get back to you within 4-6 weeks.'
        })
      )
      .catch(() =>
        setFormStatus({
          submitted: false,
          error: true,
          message: 'Submission failed. Please try again or email us.'
        })
      );
  };

  // -----------------
  // RENDER STEP LOGIC
  // -----------------
  const renderStep = () => {
    switch(currentStep) {
      // ...steps 1-4 unchanged...
      case 5:
        return (
          <div className="space-y-6">
            {/* Netlify: all hidden fields for previous steps */}
            {Object.entries(formData).map(([key, val]) => (
              <input type="hidden" name={key} value={val} key={key} />
            ))}
            <input type="hidden" name="form-name" value="music-submission" />

            <h2 className="trine-subtitle text-2xl text-white">5. Optional Extras & Final Submission</h2>
            <div>
              <label htmlFor="artistWebsite" className="block text-white mb-2">Artist Website</label>
              <input
                type="url"
                id="artistWebsite"
                name="artistWebsite"
                value={formData.artistWebsite}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="https://yourwebsite.com"
              />
            </div>
            <div>
              <label htmlFor="pressQuote" className="block text-white mb-2">Press Quotes or Features</label>
              <textarea
                id="pressQuote"
                name="pressQuote"
                value={formData.pressQuote}
                onChange={handleChange}
                rows="3"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Notable press coverage or reviewer quotes"
              ></textarea>
            </div>
            <div>
              <label htmlFor="influences" className="block text-white mb-2">Key Influences or Inspirations</label>
              <input
                type="text"
                id="influences"
                name="influences"
                value={formData.influences}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Artists, genres, or movements that inspire your work"
              />
            </div>
            <div>
              <label htmlFor="socialInitiative" className="block text-white mb-2">Social Impact or Community Initiatives</label>
              <textarea
                id="socialInitiative"
                name="socialInitiative"
                value={formData.socialInitiative}
                onChange={handleChange}
                rows="3"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Charities, workshops, or advocacy relevant to your project"
              ></textarea>
            </div>
            <div>
              <label htmlFor="feedbackRequest" className="flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  id="feedbackRequest"
                  name="feedbackRequest"
                  checked={formData.feedbackRequest}
                  onChange={handleChange}
                  className="mr-2"
                />
                Request feedback on my demo submission (if capacity allows)
              </label>
            </div>
            <div>
              <label htmlFor="agreementCheckbox" className="flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  id="agreementCheckbox"
                  name="agreementCheckbox"
                  checked={formData.agreementCheckbox}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                I have reviewed all information, and agree to the submission terms and privacy policy.
              </label>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
              >
                Previous
              </button>
              <button
                type="submit"
                className="trine-button"
              >
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="trine-title text-5xl mb-4 text-white">Submit Your Music</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Join the movement — where human vision meets machine precision. We're accepting submissions from serious AI-driven producers ready to redefine the future of sound.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {formStatus.submitted ? (
            <div className="bg-green-900/30 border border-green-500 text-green-200 p-8 rounded-xl shadow-xl text-center">
              <h2 className="text-2xl font-bold mb-4">Submission Received!</h2>
              <p>{formStatus.message}</p>
            </div>
          ) : (
            <form
              data-netlify="true"
              name="music-submission"
              onSubmit={handleSubmit}
              className="bg-gray-900 bg-opacity-90 p-8 rounded-xl shadow-xl"
            >
              <input type="hidden" name="form-name" value="music-submission" />
              {formStatus.error && (
                <div className="mb-6 bg-red-800/50 border border-red-500 text-red-200 px-6 py-4 rounded-lg">
                  {formStatus.message}
                </div>
              )}
              {renderStep()}
            </form>
          )}
        </div>
      </div>
      {/* Static dummy form for Netlify detection (not visible to users) */}
      <form name="music-submission" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="artistName" />
        <input type="text" name="aliases" />
        <input type="text" name="contactName" />
        <input type="email" name="contactEmail" />
        <input type="text" name="contactPhone" />
        <input type="text" name="location" />
        <input type="text" name="genres" />
        <input type="text" name="pronouns" />
        <input type="text" name="submissionType" />
        <input type="text" name="trackTitles" />
        <input type="text" name="productionDetails" />
        <input type="text" name="aiEngines" />
        <input type="text" name="humanVsAiPercentage" />
        <input type="text" name="workflow" />
        <input type="text" name="masteringStatus" />
        <input type="text" name="shortBio" />
        <input type="text" name="longBio" />
        <input type="text" name="trackDownloadLinks" />
        <input type="text" name="artworkDownloadLinks" />
        <input type="text" name="logoLink" />
        <input type="text" name="socialSpotify" />
        <input type="text" name="socialSoundcloud" />
        <input type="text" name="socialYoutube" />
        <input type="text" name="socialBandcamp" />
        <input type="text" name="socialInstagram" />
        <input type="text" name="socialTwitter" />
        <input type="text" name="socialFacebook" />
        <input type="text" name="monthlyListeners" />
        <input type="text" name="musicFilesUrl" />
        <input type="text" name="pressPhotosUrl" />
        <input type="checkbox" name="ownershipDeclaration" />
        <input type="text" name="publishingInfo" />
        <input type="text" name="licensePreference" />
        <input type="checkbox" name="drmAllowed" />
        <input type="checkbox" name="agreementCheckbox" />
        <input type="text" name="artistWebsite" />
        <input type="text" name="pressQuote" />
        <input type="text" name="influences" />
        <input type="text" name="socialInitiative" />
        <input type="checkbox" name="feedbackRequest" />
      </form>
    </>
  );
};

export default SubmissionPage;
