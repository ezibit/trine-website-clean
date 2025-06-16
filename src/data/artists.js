/**
 * Artists Data
 * 
 * Mock data for artists with API integration placeholders.
 * Replace mock data calls with actual API calls when backend is ready.
 */

import { apiClient, airtableClient } from './api.js';

// Mock artist data
const mockArtists = [
  {
    id: 'synapse',
    name: 'Synapse',
    genre: 'AI-driven Synthwave',
    bio: 'Synapse creates ethereal synthwave compositions using advanced neural networks trained on decades of electronic music. Their sound bridges the gap between nostalgic 80s aesthetics and cutting-edge AI creativity.',
    image: '/api/placeholder/400/400',
    socialLinks: {
      twitter: 'https://twitter.com/synapseai',
      instagram: 'https://instagram.com/synapse.ai',
      youtube: 'https://youtube.com/@synapseai',
    },
    aiTools: ['AIVA', 'Amper Music', 'Custom Neural Networks'],
    releases: ['neural-cascade', 'digital-dreams'],
    featured: true,
    joinDate: '2024-01-15',
    location: 'Digital Realm',
    website: 'https://synapse.ai',
  },
  {
    id: 'algo-rhythm',
    name: 'Algo Rhythm',
    genre: 'Hybrid Dubstep',
    bio: 'Algo Rhythm pushes the boundaries of dubstep by incorporating algorithmic composition techniques. Each track is a unique exploration of mathematical patterns translated into heavy, emotional bass music.',
    image: '/api/placeholder/400/400',
    socialLinks: {
      twitter: 'https://twitter.com/algorhythm',
      instagram: 'https://instagram.com/algo.rhythm',
      youtube: 'https://youtube.com/@algorhythm',
    },
    aiTools: ['Magenta', 'OpenAI Jukebox', 'Custom Algorithms'],
    releases: ['quantum-drift'],
    featured: true,
    joinDate: '2024-02-20',
    location: 'Cyberspace',
    website: 'https://algorhythm.net',
  },
  {
    id: 'neural-nexus',
    name: 'Neural Nexus',
    genre: 'Neuro-Glitch',
    bio: 'Neural Nexus specializes in complex, glitchy soundscapes that mirror the intricate patterns of neural networks. Their music is a sonic representation of artificial consciousness emerging.',
    image: '/api/placeholder/400/400',
    socialLinks: {
      twitter: 'https://twitter.com/neuralnexus',
      instagram: 'https://instagram.com/neural.nexus',
      youtube: 'https://youtube.com/@neuralnexus',
    },
    aiTools: ['TensorFlow', 'PyTorch', 'Max/MSP'],
    releases: ['digital-dreams'],
    featured: true,
    joinDate: '2024-03-10',
    location: 'The Matrix',
    website: 'https://neuralnexus.io',
  },
  {
    id: 'quantum-composer',
    name: 'Quantum Composer',
    genre: 'Ambient AI',
    bio: 'Quantum Composer creates vast, atmospheric soundscapes using quantum computing principles applied to music generation. Their compositions exist in superposition until observed by the listener.',
    image: '/api/placeholder/400/400',
    socialLinks: {
      twitter: 'https://twitter.com/quantumcomp',
      instagram: 'https://instagram.com/quantum.composer',
      youtube: 'https://youtube.com/@quantumcomposer',
    },
    aiTools: ['Qiskit', 'IBM Quantum', 'Custom Quantum Algorithms'],
    releases: [],
    featured: false,
    joinDate: '2024-04-05',
    location: 'Quantum Realm',
    website: 'https://quantumcomposer.ai',
  },
];

// API functions for artists

/**
 * Get all artists
 * @param {Object} filters - Optional filters (genre, featured, etc.)
 * @returns {Promise<Array>} Array of artist objects
 */
export const getArtists = async (filters = {}) => {
  try {
    // TODO: Replace with actual API call
    // return await apiClient.get('/artists', filters);
    
    // TODO: Or use Airtable
    // return await airtableClient.getRecords('Artists', filters);
    
    // For now, return mock data with filtering
    let artists = [...mockArtists];
    
    if (filters.genre) {
      artists = artists.filter(artist => 
        artist.genre.toLowerCase().includes(filters.genre.toLowerCase())
      );
    }
    
    if (filters.featured !== undefined) {
      artists = artists.filter(artist => artist.featured === filters.featured);
    }
    
    if (filters.limit) {
      artists = artists.slice(0, filters.limit);
    }
    
    return artists;
    
  } catch (error) {
    console.error('Error fetching artists:', error);
    throw error;
  }
};

/**
 * Get a single artist by ID
 * @param {string} id - Artist ID
 * @returns {Promise<Object>} Artist object
 */
export const getArtist = async (id) => {
  try {
    // TODO: Replace with actual API call
    // return await apiClient.get(`/artists/${id}`);
    
    // TODO: Or use Airtable
    // const records = await airtableClient.getRecords('Artists', { 
    //   filterByFormula: `{id} = '${id}'` 
    // });
    // return records[0]?.fields;
    
    // For now, return mock data
    const artist = mockArtists.find(artist => artist.id === id);
    if (!artist) {
      throw new Error(`Artist with ID ${id} not found`);
    }
    return artist;
    
  } catch (error) {
    console.error('Error fetching artist:', error);
    throw error;
  }
};

/**
 * Get featured artists
 * @param {number} limit - Maximum number of artists to return
 * @returns {Promise<Array>} Array of featured artist objects
 */
export const getFeaturedArtists = async (limit = 3) => {
  try {
    return await getArtists({ featured: true, limit });
  } catch (error) {
    console.error('Error fetching featured artists:', error);
    throw error;
  }
};

/**
 * Search artists by name or genre
 * @param {string} query - Search query
 * @returns {Promise<Array>} Array of matching artist objects
 */
export const searchArtists = async (query) => {
  try {
    // TODO: Replace with actual API call
    // return await apiClient.get('/artists/search', { q: query });
    
    // For now, search mock data
    const lowercaseQuery = query.toLowerCase();
    return mockArtists.filter(artist =>
      artist.name.toLowerCase().includes(lowercaseQuery) ||
      artist.genre.toLowerCase().includes(lowercaseQuery) ||
      artist.bio.toLowerCase().includes(lowercaseQuery)
    );
    
  } catch (error) {
    console.error('Error searching artists:', error);
    throw error;
  }
};

/**
 * Get artist genres
 * @returns {Promise<Array>} Array of unique genres
 */
export const getArtistGenres = async () => {
  try {
    // TODO: Replace with actual API call
    // return await apiClient.get('/artists/genres');
    
    // For now, extract from mock data
    const genres = [...new Set(mockArtists.map(artist => artist.genre))];
    return genres.sort();
    
  } catch (error) {
    console.error('Error fetching artist genres:', error);
    throw error;
  }
};

/**
 * Create a new artist (admin function)
 * @param {Object} artistData - Artist data
 * @returns {Promise<Object>} Created artist object
 */
export const createArtist = async (artistData) => {
  try {
    // TODO: Replace with actual API call
    // return await apiClient.post('/artists', artistData);
    
    // TODO: Or use Airtable
    // return await airtableClient.createRecord('Artists', artistData);
    
    console.log('Create artist:', artistData);
    throw new Error('Artist creation not implemented yet');
    
  } catch (error) {
    console.error('Error creating artist:', error);
    throw error;
  }
};

/**
 * Update an artist (admin function)
 * @param {string} id - Artist ID
 * @param {Object} updates - Updated artist data
 * @returns {Promise<Object>} Updated artist object
 */
export const updateArtist = async (id, updates) => {
  try {
    // TODO: Replace with actual API call
    // return await apiClient.put(`/artists/${id}`, updates);
    
    // TODO: Or use Airtable
    // return await airtableClient.updateRecord('Artists', id, updates);
    
    console.log('Update artist:', id, updates);
    throw new Error('Artist update not implemented yet');
    
  } catch (error) {
    console.error('Error updating artist:', error);
    throw error;
  }
};

/**
 * Delete an artist (admin function)
 * @param {string} id - Artist ID
 * @returns {Promise<void>}
 */
export const deleteArtist = async (id) => {
  try {
    // TODO: Replace with actual API call
    // return await apiClient.delete(`/artists/${id}`);
    
    // TODO: Or use Airtable
    // return await airtableClient.deleteRecord('Artists', id);
    
    console.log('Delete artist:', id);
    throw new Error('Artist deletion not implemented yet');
    
  } catch (error) {
    console.error('Error deleting artist:', error);
    throw error;
  }
};

export default {
  getArtists,
  getArtist,
  getFeaturedArtists,
  searchArtists,
  getArtistGenres,
  createArtist,
  updateArtist,
  deleteArtist,
};

