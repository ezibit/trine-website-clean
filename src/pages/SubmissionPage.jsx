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
    socialSpotify: '',
    socialSoundcloud: '',
    socialYoutube: '',
    socialBandcamp: '',
    socialInstagram: '',
    socialTwitter: '',
    socialFacebook: '',
    monthlyListeners: '',
    
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
    
    // Demo Feedback Request
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
    
    // In a real application, this would send the form data to a server
    // For now, we'll just simulate a successful submission
    
    // Form validation
    if (!formData.artistName || !formData.contactEmail || !formData.agreementCheckbox) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields and agree to the terms.'
      });
      return;
    }
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Your submission has been received! We will review your music and get back to you within 4-6 weeks.'
    });
    
    // In a real application, we would reset the form and redirect the user
  };

  // Render different form steps
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
              <label htmlFor="contactName" className="block text-white mb-2">Primary Contact Person *</label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                required
                placeholder="Name of person handling submissions"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contactEmail" className="block text-white mb-2">Email *</label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                  placeholder="Your email address"
                />
              </div>
              
              <div>
                <label htmlFor="contactPhone" className="block text-white mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your phone number"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="location" className="block text-white mb-2">Location (City, Country) *</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                required
                placeholder="e.g., Berlin, Germany"
              />
            </div>
            
            <div>
              <label htmlFor="genres" className="block text-white mb-2">Genre(s) & Subgenre(s) *</label>
              <input
                type="text"
                id="genres"
                name="genres"
                value={formData.genres}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                required
                placeholder="e.g., AI-driven Synthwave, Hybrid Dubstep, Neuro-Glitch"
              />
            </div>
            
            <div>
              <label htmlFor="pronouns" className="block text-white mb-2">Preferred Pronouns</label>
              <input
                type="text"
                id="pronouns"
                name="pronouns"
                value={formData.pronouns}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="e.g., he/him, she/her, they/them"
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
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                required
              >
                <option value="">Select submission type</option>
                <option value="Single">Single track</option>
                <option value="EP">EP (2–6 tracks)</option>
                <option value="LP">LP (7+ tracks)</option>
                <option value="Remix">Remix proposal</option>
                <option value="Other">I'm throwing spaghetti at the wall—see what sticks</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="trackTitles" className="block text-white mb-2">Track/Release Titles *</label>
              <textarea
                id="trackTitles"
                name="trackTitles"
                value={formData.trackTitles}
                onChange={handleChange}
                rows="4"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                required
                placeholder="List each track name, order, and whether it's instrumental or contains vocals"
              ></textarea>
            </div>
            
            <div>
              <label className="block text-white mb-2">File Uploads</label>
              <p className="text-gray-400 text-sm mb-2">WAV (44.1kHz/24-bit preferred), plus stems if you want us to consider remix potential.</p>
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
                <p className="text-gray-300 mb-4">Drag and drop files here or click to browse</p>
                <button
                  type="button"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                >
                  Browse Files
                </button>
                <p className="text-gray-400 text-sm mt-4">This is a demo form. File upload functionality is not implemented.</p>
              </div>
            </div>
            
            <div>
              <label htmlFor="aiEngines" className="block text-white mb-2">AI Engine(s) Used *</label>
              <input
                type="text"
                id="aiEngines"
                name="aiEngines"
                value={formData.aiEngines}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                required
                placeholder="e.g., Suno v4.5, custom neural nets"
              />
            </div>
            
            <div>
              <label htmlFor="humanVsAiPercentage" className="block text-white mb-2">Human vs. AI Input Percentage *</label>
              <input
                type="text"
                id="humanVsAiPercentage"
                name="humanVsAiPercentage"
                value={formData.humanVsAiPercentage}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                required
                placeholder="e.g., 30% human, 70% AI"
              />
            </div>
            
            <div>
              <label htmlFor="workflow" className="block text-white mb-2">Workflow Notes</label>
              <textarea
                id="workflow"
                name="workflow"
                value={formData.workflow}
                onChange={handleChange}
                rows="3"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="e.g., All-AI jam sessions vs. Human engineer did the final mix"
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="masteringStatus" className="block text-white mb-2">Mastering Status *</label>
              <select
                id="masteringStatus"
                name="masteringStatus"
                value={formData.masteringStatus}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                required
              >
                <option value="">Select mastering status</option>
                <option value="Fully mastered">Fully mastered (ready for release)</option>
                <option value="In progress">In progress</option>
                <option value="Not mastered">I'm my own worst enemy in the studio</option>
              </select>
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
            
            <div>
              <label className="block text-white mb-2">Press Photos / High-Resolution Images</label>
              <p className="text-gray-400 text-sm mb-2">At least two: one promo shot and one candid "in-the-studio" pic. (JPEG or PNG, 300 dpi, min. 1500 px on the longest side.)</p>
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
                <p className="text-gray-300 mb-4">Drag and drop files here or click to browse</p>
                <button
                  type="button"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                >
                  Browse Files
                </button>
                <p className="text-gray-400 text-sm mt-4">This is a demo form. File upload functionality is not implemented.</p>
              </div>
            </div>
            
            <div>
              <label className="block text-white mb-2">Artist Logo (Transparent PNG)</label>
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
                <p className="text-gray-300 mb-4">Drag and drop file here or click to browse</p>
                <button
                  type="button"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                >
                  Browse Files
                </button>
                <p className="text-gray-400 text-sm mt-4">This is a demo form. File upload functionality is not implemented.</p>
              </div>
            </div>
            
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
            <h2 className="trine-subtitle text-2xl text-white">4. Legal & Rights</h2>
            
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <div className="flex items-start mb-4">
                <input
                  type="checkbox"
                  id="ownershipDeclaration"
                  name="ownershipDeclaration"
                  checked={formData.ownershipDeclaration}
                  onChange={handleChange}
                  className="mt-1 mr-3"
                  required
                />
                <label htmlFor="ownershipDeclaration" className="text-white">
                  <span className="font-bold block mb-1">Ownership & Clearance Declaration *</span>
                  <span className="text-gray-300 text-sm">
                    I confirm I own 100% of the rights to these tracks (including samples, stems, and AI-generated content). No lawsuits pending.
                  </span>
                </label>
              </div>
            </div>
            
            <div>
              <label htmlFor="publishingInfo" className="block text-white mb-2">Publishing Information</label>
              <input
                type="text"
                id="publishingInfo"
                name="publishingInfo"
                value={formData.publishingInfo}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="PRO/royalty-collection society (e.g., APRA AMCOS, BMI, ASCAP) membership and associated IPI/CAE number"
              />
            </div>
            
            <div>
              <label htmlFor="licensePreference" className="block text-white mb-2">License Preference *</label>
              <select
                id="licensePreference"
                name="licensePreference"
                value={formData.licensePreference}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                required
              >
                <option value="">Select license preference</option>
                <option value="Exclusive">Exclusive worldwide label deal ("Lock me in!")</option>
                <option value="Non-exclusive">Non-exclusive distribution ("Let me sleep with other labels, too")</option>
                <option value="Territory restrictions">Territory restrictions ("Please don't release in the Land of Oz")</option>
              </select>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <div className="flex items-start mb-4">
                <input
                  type="checkbox"
                  id="drmAllowed"
                  name="drmAllowed"
                  checked={formData.drmAllowed}
                  onChange={handleChange}
                  className="mt-1 mr-3"
                />
                <label htmlFor="drmAllowed" className="text-white">
                  <span className="font-bold block mb-1">Digital Rights Management</span>
                  <span className="text-gray-300 text-sm">
                    DRM allowed? If unchecked, we won't put Active Content in your file or crash someone's iPhone.
                  </span>
                </label>
              </div>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <div className="flex items-start mb-4">
                <input
                  type="checkbox"
                  id="agreementCheckbox"
                  name="agreementCheckbox"
                  checked={formData.agreementCheckbox}
                  onChange={handleChange}
                  className="mt-1 mr-3"
                  required
                />
                <label htmlFor="agreementCheckbox" className="text-white">
                  <span className="font-bold block mb-1">Agreement Checkbox *</span>
                  <span className="text-gray-300 text-sm">
                    I've read TRINE's submission policy, agree to the terms, and will stop sending my demo on floppy disks.
                  </span>
                </label>
              </div>
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
            <h2 className="trine-subtitle text-2xl text-white">5. Optional Extras</h2>
            
            <div>
              <label htmlFor="artistWebsite" className="block text-white mb-2">Artist Website / Linktree</label>
              <input
                type="url"
                id="artistWebsite"
                name="artistWebsite"
                value={formData.artistWebsite}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="https://..."
              />
            </div>
            
            <div>
              <label htmlFor="pressQuote" className="block text-white mb-2">Press Quote / Testimonial</label>
              <textarea
                id="pressQuote"
                name="pressQuote"
                value={formData.pressQuote}
                onChange={handleChange}
                rows="3"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="e.g., 'These tracks melted my skull and then reassembled it better.'"
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="influences" className="block text-white mb-2">Influences & Moodboard</label>
              <textarea
                id="influences"
                name="influences"
                value={formData.influences}
                onChange={handleChange}
                rows="3"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="e.g., Imagine if Boards of Canada met Burial in a haunted VR cathedral"
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="socialInitiative" className="block text-white mb-2">Artist Social Initiative or Cause</label>
              <textarea
                id="socialInitiative"
                name="socialInitiative"
                value={formData.socialInitiative}
                onChange={handleChange}
                rows="3"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Are you raising money for endangered octopi? Creating awareness for AI ethics?"
              ></textarea>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <div className="flex items-start mb-4">
                <input
                  type="checkbox"
                  id="feedbackRequest"
                  name="feedbackRequest"
                  checked={formData.feedbackRequest}
                  onChange={handleChange}
                  className="mt-1 mr-3"
                />
                <label htmlFor="feedbackRequest" className="text-white">
                  <span className="font-bold block mb-1">Demo Feedback Request</span>
                  <span className="text-gray-300 text-sm">
                    Please send me detailed feedback if you decide not to release. (We'll attempt it, honest!)
                  </span>
                </label>
              </div>
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
                onClick={handleSubmit}
                className="trine-button"
              >
                Submit Application
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
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="trine-title text-5xl mb-4 text-white">Submit Your Music</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Join the movement — where human vision meets machine precision. We're accepting submissions from serious AI-driven producers ready to redefine the future of sound.
        </p>
      </div>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto">
        {formStatus.submitted ? (
          <div className="bg-green-900/30 border border-green-500 text-green-300 p-8 rounded-lg text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="trine-title text-2xl mb-4 text-white">Submission Received!</h2>
            <p className="mb-6">{formStatus.message}</p>
            <a href="/" className="trine-button inline-block">Back to Home</a>
          </div>
        ) : (
          <div className="bg-black/50 border border-gray-800 rounded-lg p-8">
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div 
                    key={step}
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      currentStep === step 
                        ? 'bg-accent text-white' 
                        : currentStep > step 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    {currentStep > step ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Basic Info</span>
                <span>Music Details</span>
                <span>Artist Profile</span>
                <span>Legal</span>
                <span>Extras</span>
              </div>
            </div>
            
            {/* Form Steps */}
            <form>
              {renderStep()}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmissionPage;

