/**
 * API Client for TRINE AI Music Label
 * 
 * This file contains API functions for data fetching.
 * Currently uses mock data, but can be easily replaced with real API calls.
 */

// Base API configuration
const API_BASE_URL = process.env.VITE_API_BASE_URL || 'https://api.trine.studio';
const AIRTABLE_BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_API_KEY = process.env.VITE_AIRTABLE_API_KEY;

// Generic API client
class ApiClient {
  constructor(baseURL = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async get(endpoint, params = {}) {
    const searchParams = new URLSearchParams(params);
    const url = searchParams.toString() ? `${endpoint}?${searchParams}` : endpoint;
    return this.request(url);
  }

  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE',
    });
  }
}

// Airtable client (for future use)
class AirtableClient {
  constructor(baseId = AIRTABLE_BASE_ID, apiKey = AIRTABLE_API_KEY) {
    this.baseId = baseId;
    this.apiKey = apiKey;
    this.baseURL = 'https://api.airtable.com/v0';
  }

  async request(table, options = {}) {
    if (!this.baseId || !this.apiKey) {
      throw new Error('Airtable configuration missing. Set VITE_AIRTABLE_BASE_ID and VITE_AIRTABLE_API_KEY');
    }

    const url = `${this.baseURL}/${this.baseId}/${table}`;
    const config = {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`Airtable API error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Airtable request failed:', error);
      throw error;
    }
  }

  async getRecords(table, params = {}) {
    const searchParams = new URLSearchParams(params);
    const url = searchParams.toString() ? `${table}?${searchParams}` : table;
    const response = await this.request(url);
    return response.records;
  }

  async createRecord(table, fields) {
    return this.request(table, {
      method: 'POST',
      body: JSON.stringify({ fields }),
    });
  }

  async updateRecord(table, recordId, fields) {
    return this.request(`${table}/${recordId}`, {
      method: 'PATCH',
      body: JSON.stringify({ fields }),
    });
  }

  async deleteRecord(table, recordId) {
    return this.request(`${table}/${recordId}`, {
      method: 'DELETE',
    });
  }
}

// Create client instances
export const apiClient = new ApiClient();
export const airtableClient = new AirtableClient();

// Form submission handler
export const submitArtistForm = async (formData) => {
  try {
    // Option 1: Send to custom API
    // return await apiClient.post('/submissions', formData);
    
    // Option 2: Send to Airtable
    // return await airtableClient.createRecord('Submissions', formData);
    
    // Option 3: Send to Netlify Forms (requires netlify attribute on form)
    // This is handled automatically by Netlify when form has netlify attribute
    
    // Option 4: Send to Formspree or similar service
    // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
    // return response.json();
    
    // For now, just log the form data (development mode)
    console.log('Form submission:', formData);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return success response
    return {
      success: true,
      message: 'Submission received! We\'ll be in touch soon.',
      id: `sub_${Date.now()}`,
    };
    
  } catch (error) {
    console.error('Form submission error:', error);
    throw new Error('Failed to submit form. Please try again.');
  }
};

// Email subscription handler
export const subscribeToNewsletter = async (email) => {
  try {
    // Replace with actual newsletter service (Mailchimp, ConvertKit, etc.)
    console.log('Newsletter subscription:', email);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      success: true,
      message: 'Successfully subscribed to newsletter!',
    };
    
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    throw new Error('Failed to subscribe. Please try again.');
  }
};

// Contact form handler
export const submitContactForm = async (formData) => {
  try {
    // Replace with actual contact form handler
    console.log('Contact form submission:', formData);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      message: 'Message sent! We\'ll get back to you soon.',
    };
    
  } catch (error) {
    console.error('Contact form error:', error);
    throw new Error('Failed to send message. Please try again.');
  }
};

export default apiClient;

