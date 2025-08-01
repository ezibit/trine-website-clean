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
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="trine-subtitle text-2xl text-white">1. Basic Artist/Project Info</h2>
            <div>
              <label htmlFor="artistName" className="block text-white mb-2">Artist/Project Name *</label>
              <input
                type="text"
                id="artistName"
                name="artistName"
                value={formData.artistName}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                required
                placeholder="Official artist name"
              />
            </div>
            <div>
              <label htmlFor="aliases" className="block text-white mb-2">Aliases or Alternate Project Names</label>
              <input
                type="text"
                id="aliases"
                name="aliases"
                value={formData.aliases}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Any other names you release music under"
              />
            </div>
            <div>
              <label htmlFor="contactName" className="block text-white mb-2">Contact Name *</label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                required
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="contactEmail" className="block text-white mb-2">Contact Email *</label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                required
                placeholder="email@domain.com"
              />
            </div>
            <div>
              <label htmlFor="contactPhone" className="block text-white mb-2">Phone Number</label>
              <input
                type="text"
                id="contactPhone"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Optional"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-white mb-2">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="City, Country"
              />
            </div>
            <div>
              <label htmlFor="genres" className="block text-white mb-2">Genres</label>
              <input
                type="text"
                id="genres"
                name="genres"
                value={formData.genres}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Comma-separated"
              />
            </div>
            <div>
              <label htmlFor="pronouns" className="block text-white mb-2">Pronouns</label>
              <input
                type="text"
                id="pronouns"
                name="pronouns"
                value={formData.pronouns}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="he/him, she/her, they/them, etc."
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                className="trine-button"
              >
                Next Step
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="trine-subtitle text-2xl text-white">2. Music & Technical Details</h2>
            <div>
              <label htmlFor="submissionType" className="block text-white mb-2">Submission Type *</label>
              <select
                id="submissionType"
                name="submissionType"
                value={formData.submissionType}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Select...</option>
                <option value="Single">Single</option>
                <option value="EP">EP</option>
                <option value="Album">Album</option>
                <option value="Remix">Remix</option>
                <option value="Compilation">Compilation</option>
              </select>
            </div>
            <div>
              <label htmlFor="trackTitles" className="block text-white mb-2">Track Titles *</label>
              <input
                type="text"
                id="trackTitles"
                name="trackTitles"
                value={formData.trackTitles}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Comma-separated"
              />
            </div>
            <div>
              <label htmlFor="productionDetails" className="block text-white mb-2">Production & AI Details *</label>
              <textarea
                id="productionDetails"
                name="productionDetails"
                value={formData.productionDetails}
                onChange={handleChange}
                required
                rows="3"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Describe your production process and AI involvement if any include DAW, plugins, AI tools used, etc."
              ></textarea>
            </div>
            <div>
              <label htmlFor="aiEngines" className="block text-white mb-2">AI Tools/Engines Used if any</label>
              <input
                type="text"
                id="aiEngines"
                name="aiEngines"
                value={formData.aiEngines}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Ozone, LANDR, AIVA, custom Python scripts, etc."
              />
            </div>
            <div>
              <label htmlFor="humanVsAiPercentage" className="block text-white mb-2">% Human vs. % AI</label>
              <input
                type="text"
                id="humanVsAiPercentage"
                name="humanVsAiPercentage"
                value={formData.humanVsAiPercentage}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="e.g., 40% AI, 60% human"
              />
            </div>
            <div>
              <label htmlFor="workflow" className="block text-white mb-2">Workflow/DAW</label>
              <input
                type="text"
                id="workflow"
                name="workflow"
                value={formData.workflow}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Ableton, FL Studio, custom Python, etc."
              />
            </div>
            <div>
              <label htmlFor="masteringStatus" className="block text-white mb-2">Mastering Status</label>
              <input
                type="text"
                id="masteringStatus"
                name="masteringStatus"
                value={formData.masteringStatus}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Unmastered, AI-mastered, pro/mastering engineer, etc."
              />
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
                type="button"
                onClick={nextStep}
                className="trine-button"
              >
                Next Step
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="trine-subtitle text-2xl text-white">3. Artist Profile & Story</h2>
            <div>
              <label htmlFor="shortBio" className="block text-white mb-2">Short Bio (150–300 words) *</label>
              <textarea
                id="shortBio"
                name="shortBio"
                value={formData.shortBio}
                onChange={handleChange}
                rows="4"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                required
                placeholder="Who you are, your sonic vision, and what makes you uniquely TRINE material"
              ></textarea>
            </div>
            <div>
              <label htmlFor="longBio" className="block text-white mb-2">Longer EPK-style Bio (500–800 words)</label>
              <textarea
                id="longBio"
                name="longBio"
                value={formData.longBio}
                onChange={handleChange}
                rows="6"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Include career highlights, past releases, key performances or collaborations, and any awards/acknowledgments"
              ></textarea>
            </div>
            {/* NEW: Track Download Links */}
            <div>
              <label htmlFor="trackDownloadLinks" className="block text-white mb-2">Track Download links*</label>
              <input
                type="text"
                id="trackDownloadLinks"
                name="trackDownloadLinks"
                value={formData.trackDownloadLinks}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Paste Google drive, Dropbox, WeTransfer, Soundcloud URLs here"
              />
              <p className="text-gray-400 text-sm mt-2">Example: https://drive.google.com/yourfile</p>
            </div>
            {/* NEW: Artwork Download Links */}
            <div>
              <label htmlFor="artworkDownloadLinks" className="block text-white mb-2">Artwork download links*</label>
              <input
                type="text"
                id="artworkDownloadLinks"
                name="artworkDownloadLinks"
                value={formData.artworkDownloadLinks}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Dropbox or Google drive URLs here"
              />
              <p className="text-gray-400 text-sm mt-2">Example: https://dropbox.com/s/yourartwork or https://drive.google.com/yourartwork</p>
            </div>
            {/* NEW: Logo Link */}
            <div>
              <label htmlFor="logoLink" className="block text-white mb-2">Logo link</label>
              <input
                type="text"
                id="logoLink"
                name="logoLink"
                value={formData.logoLink}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="https://drive.google.com/yourfile"
              />
              <p className="text-gray-400 text-sm mt-2">Example: https://drive.google.com/yourfile</p>
            </div>
            {/* Social Links & Listeners */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="socialSpotify" className="block text-white mb-2">Spotify Artist URL</label>
                <input
                  type="url"
                  id="socialSpotify"
                  name="socialSpotify"
                  value={formData.socialSpotify}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="https://open.spotify.com/artist/..."
                />
              </div>
              <div>
                <label htmlFor="socialSoundcloud" className="block text-white mb-2">SoundCloud URL</label>
                <input
                  type="url"
                  id="socialSoundcloud"
                  name="socialSoundcloud"
                  value={formData.socialSoundcloud}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="https://soundcloud.com/..."
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="socialInstagram" className="block text-white mb-2">Instagram</label>
                <input
                  type="text"
                  id="socialInstagram"
                  name="socialInstagram"
                  value={formData.socialInstagram}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="@username"
                />
              </div>
              <div>
                <label htmlFor="socialTwitter" className="block text-white mb-2">Twitter/X</label>
                <input
                  type="text"
                  id="socialTwitter"
                  name="socialTwitter"
                  value={formData.socialTwitter}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="@username"
                />
              </div>
              <div>
                <label htmlFor="socialFacebook" className="block text-white mb-2">Facebook</label>
                <input
                  type="text"
                  id="socialFacebook"
                  name="socialFacebook"
                  value={formData.socialFacebook}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="facebook.com/..."
                />
              </div>
            </div>
            <div>
              <label htmlFor="monthlyListeners" className="block text-white mb-2">Monthly Listener Count or Follower Stats</label>
              <input
                type="text"
                id="monthlyListeners"
                name="monthlyListeners"
                value={formData.monthlyListeners}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="e.g., 5,000 monthly Spotify listeners, 2,500 SoundCloud followers"
              />
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
                type="button"
                onClick={nextStep}
                className="trine-button"
              >
                Next Step
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="trine-subtitle text-2xl text-white">4. Legal & Rights Info</h2>
            <div>
              <label htmlFor="ownershipDeclaration" className="flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  id="ownershipDeclaration"
                  name="ownershipDeclaration"
                  checked={formData.ownershipDeclaration}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                I confirm I am the legal rights holder for all materials submitted.
              </label>
            </div>
            <div>
              <label htmlFor="publishingInfo" className="block text-white mb-2">Publishing/Label Details (if any)</label>
              <input
                type="text"
                id="publishingInfo"
                name="publishingInfo"
                value={formData.publishingInfo}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="If applicable, list publishers or labels"
              />
            </div>
            <div>
              <label htmlFor="licensePreference" className="block text-white mb-2">License Preference</label>
              <select
                id="licensePreference"
                name="licensePreference"
                value={formData.licensePreference}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Select license</option>
                <option value="All Rights Reserved">All Rights Reserved</option>
                <option value="Creative Commons">Creative Commons</option>
                <option value="Open Source">Open Source/No Copyright</option>
              </select>
            </div>
            <div>
              <label htmlFor="drmAllowed" className="flex items-center text-white mb-2">
                <input
                  type="checkbox"
                  id="drmAllowed"
                  name="drmAllowed"
                  checked={formData.drmAllowed}
                  onChange={handleChange}
                  className="mr-2"
                />
                Allow digital rights management (DRM)?
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
                type="button"
                onClick={nextStep}
                className="trine-button"
              >
                Next Step
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
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
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="trine-title text-5xl mb-4 text-white">Submit Your Music</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Join the movement — where human vision meets machine precision. We're accepting submissions from serious producers ready to redefine the future of sound.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        {formStatus.submitted ? (
          <div className="bg-green-900/30 border border-green-500 text-green-200 p-8 rounded-xl shadow-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Submission Received!</h2>
            <p>{formStatus.message}</p>
          </div>
        ) : (
          <form netlify name="artist-submission" onSubmit={handleSubmit}
            className="bg-gray-900 bg-opacity-90 p-8 rounded-xl shadow-xl"
          >  <input type="hidden" name="form-name" value="artist-submission" />

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
  );
};

export default SubmissionPage;

// Note: This form uses Netlify for submission handling. Ensure your site is set up to handle form submissions correctly.
// Make sure to test the form thoroughly, especially the file upload and URL handling.
// You may need to adjust the form handling based on your backend setup or hosting provider.
// Consider adding validation for URLs and file formats if needed.
// Also, ensure that the form is accessible and user-friendly across different devices and screen sizes.

<form name="artist-submission" netlify netlify-honeypot="bot-field" hidden>
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
