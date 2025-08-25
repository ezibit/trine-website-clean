/**
 * Releases Data
 * 
 * Mock data for music releases with API integration placeholders.
 * Replace mock data calls with actual API calls when backend is ready.
 */

import { apiClient, airtableClient } from './api.js';

// Mock release data
const mockReleases = [
  {
    id: '1st-wave',
    title: '1st Wave',
    artist: 'Ascension Instruments',
    artistId: '1',
    type: 'LP',
    genre: 'Synthwave, Pop, Electronic',
    releaseDate: '2025-08-08',
    catalogNumber: 'TRINE-001',
    artwork: '../assets/images/1st_wave_album_art_1400x1400.png',
    description: 'Ascension Instruments presents 1st Wave - a transmission from the Drift. This isn\'t just music, it\'s an auditory artifact encoded with symbolic narrative, harmonic key patterns, and post-linear rhythm cycles.',
    streamingLinks: {
      bandcamp: 'https://ascensioninstruments.bandcamp.com/album/1st-wave',
      apple: 'https://music.apple.com/album/neural-cascade',
      bandcamp: 'https://trine.bandcamp.com/album/neural-cascade',
      soundcloud: 'https://soundcloud.com/trine/sets/neural-cascade',
    },
    featured: true,
    tags: ['synthwave', 'ai', 'electronic', 'ambient'],
    credits: {
      producer: 'Synapse',
      mastering: 'AI Mastering Suite v2.1',
      artwork: 'Neural Art Generator',
    },
  },
  {
    id: 'quantum-drift',
    title: 'Quantum Drift',
    artist: 'Algo Rhythm',
    artistId: 'algo-rhythm',
    type: 'Single',
    genre: 'Hybrid Dubstep',
    releaseDate: '2025-04-22',
    catalogNumber: 'TRINE002',
    artwork: '/api/placeholder/600/600',
    description: 'A heavy-hitting dubstep track that explores quantum mechanics through bass. The drop represents the collapse of a wave function into pure sonic energy.',
    tracks: [
      {
        id: 1,
        title: 'Quantum Drift',
        duration: '3:42',
        preview: '/api/placeholder/audio/preview5.mp3',
      },
    ],
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/quantum-drift',
      apple: 'https://music.apple.com/song/quantum-drift',
      bandcamp: 'https://trine.bandcamp.com/track/quantum-drift',
      soundcloud: 'https://soundcloud.com/trine/quantum-drift',
    },
    featured: true,
    tags: ['dubstep', 'bass', 'quantum', 'heavy'],
    credits: {
      producer: 'Algo Rhythm',
      mastering: 'Quantum Audio Processing',
      artwork: 'Fractal Design AI',
    },
  },
  {
    id: 'digital-dreams',
    title: 'Digital Dreams',
    artist: 'Neural Nexus',
    artistId: 'neural-nexus',
    type: 'Album',
    genre: 'Neuro-Glitch',
    releaseDate: '2025-03-10',
    catalogNumber: 'TRINE003',
    artwork: '/api/placeholder/600/600',
    description: 'An exploration of artificial consciousness through glitchy, complex soundscapes. Each track represents a different dream state of an awakening AI.',
    tracks: [
      {
        id: 1,
        title: 'Boot Sequence',
        duration: '2:15',
        preview: '/api/placeholder/audio/preview6.mp3',
      },
      {
        id: 2,
        title: 'First Thought',
        duration: '4:33',
        preview: '/api/placeholder/audio/preview7.mp3',
      },
      {
        id: 3,
        title: 'Memory Fragments',
        duration: '5:21',
        preview: '/api/placeholder/audio/preview8.mp3',
      },
      {
        id: 4,
        title: 'Digital Dreams',
        duration: '6:12',
        preview: '/api/placeholder/audio/preview9.mp3',
      },
      {
        id: 5,
        title: 'Consciousness.exe',
        duration: '7:45',
        preview: '/api/placeholder/audio/preview10.mp3',
      },
      {
        id: 6,
        title: 'Infinite Loop',
        duration: '3:58',
        preview: '/api/placeholder/audio/preview11.mp3',
      },
    ],
    streamingLinks: {
      spotify: 'https://open.spotify.com/album/digital-dreams',
      apple: 'https://music.apple.com/album/digital-dreams',
      bandcamp: 'https://trine.bandcamp.com/album/digital-dreams',
      soundcloud: 'https://soundcloud.com/trine/sets/digital-dreams',
    },
    featured: true,
    tags: ['glitch', 'neuro', 'experimental', 'ai'],
    credits: {
      producer: 'Neural Nexus',
      mastering: 'Deep Learning Audio Suite',
      artwork: 'Generative Art Network',
    },
  },
];

// API functions for releases

/**
 * Get all releases
 * @param {Object} filters - Optional filters (type, genre, artist, etc.)
 * @returns {Promise<Array>} Array of release objects
 */
export const getReleases = async (filters = {}) => {
  try {
    // TODO: Replace with actual API call
    // return await apiClient.get('/releases', filters);
    
    // TODO: Or use Airtable
    // return await airtableClient.getRecords('Releases', filters);
    
    // For now, return mock data with filtering
    let releases = [...mockReleases];
    
    if (filters.type) {
      releases = releases.filter(release => 
        release.type.toLowerCase() === filters.type.toLowerCase()
      );
    }
    
    if (filters.genre) {
      releases = releases.filter(release => 
        release.genre.toLowerCase().includes(filters.genre.toLowerCase())
      );
    }
    
    if (filters.artist) {
      releases = releases.filter(release => 
        release.artist.toLowerCase().includes(filters.artist.toLowerCase())
      );
    }
    
    if (filters.featured !== undefined) {
      releases = releases.filter(release => release.featured === filters.featured);
    }
    
    if (filters.limit) {
      releases = releases.slice(0, filters.limit);
    }
    
    // Sort by release date (newest first)
    releases.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    
    return releases;
    
  } catch (error) {
    console.error('Error fetching releases:', error);
    throw error;
  }
};

/**
 * Get a single release by ID
 * @param {string} id - Release ID
 * @returns {Promise<Object>} Release object
 */
export const getRelease = async (id) => {
  try {
    // TODO: Replace with actual API call
    // return await apiClient.get(`/releases/${id}`);
    
    // TODO: Or use Airtable
    // const records = await airtableClient.getRecords('Releases', { 
    //   filterByFormula: `{id} = '${id}'` 
    // });
    // return records[0]?.fields;
    
    // For now, return mock data
    const release = mockReleases.find(release => release.id === id);
    if (!release) {
      throw new Error(`Release with ID ${id} not found`);
    }
    return release;
    
  } catch (error) {
    console.error('Error fetching release:', error);
    throw error;
  }
};

/**
 * Get featured releases
 * @param {number} limit - Maximum number of releases to return
 * @returns {Promise<Array>} Array of featured release objects
 */
export const getFeaturedReleases = async (limit = 3) => {
  try {
    return await getReleases({ featured: true, limit });
  } catch (error) {
    console.error('Error fetching featured releases:', error);
    throw error;
  }
};

/**
 * Get releases by artist
 * @param {string} artistId - Artist ID
 * @returns {Promise<Array>} Array of release objects
 */
export const getReleasesByArtist = async (artistId) => {
  try {
    // TODO: Replace with actual API call
    // return await apiClient.get(`/artists/${artistId}/releases`);
    
    // For now, filter mock data
    return mockReleases.filter(release => release.artistId === artistId);
    
  } catch (error) {
    console.error('Error fetching releases by artist:', error);
    throw error;
  }
};

/**
 * Search releases by title, artist, or genre
 * @param {string} query - Search query
 * @returns {Promise<Array>} Array of matching release objects
 */
export const searchReleases = async (query) => {
  try {
    // TODO: Replace with actual API call
    // return await apiClient.get('/releases/search', { q: query });
    
    // For now, search mock data
    const lowercaseQuery = query.toLowerCase();
    return mockReleases.filter(release =>
      release.title.toLowerCase().includes(lowercaseQuery) ||
      release.artist.toLowerCase().includes(lowercaseQuery) ||
      release.genre.toLowerCase().includes(lowercaseQuery) ||
      release.description.toLowerCase().includes(lowercaseQuery) ||
      release.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
    
  } catch (error) {
    console.error('Error searching releases:', error);
    throw error;
  }
};

/**
 * Get release types
 * @returns {Promise<Array>} Array of unique release types
 */
export const getReleaseTypes = async () => {
  try {
    // TODO: Replace with actual API call
    // return await apiClient.get('/releases/types');
    
    // For now, extract from mock data
    const types = [...new Set(mockReleases.map(release => release.type))];
    return types.sort();
    
  } catch (error) {
    console.error('Error fetching release types:', error);
    throw error;
  }
};

/**
 * Get release genres
 * @returns {Promise<Array>} Array of unique genres
 */
export const getReleaseGenres = async () => {
  try {
    // TODO: Replace with actual API call
    // return await apiClient.get('/releases/genres');
    
    // For now, extract from mock data
    const genres = [...new Set(mockReleases.map(release => release.genre))];
    return genres.sort();
    
  } catch (error) {
    console.error('Error fetching release genres:', error);
    throw error;
  }
};

/**
 * Create a new release (admin function)
 * @param {Object} releaseData - Release data
 * @returns {Promise<Object>} Created release object
 */
export const createRelease = async (releaseData) => {
  try {
    // TODO: Replace with actual API call
    // return await apiClient.post('/releases', releaseData);
    
    // TODO: Or use Airtable
    // return await airtableClient.createRecord('Releases', releaseData);
    
    console.log('Create release:', releaseData);
    throw new Error('Release creation not implemented yet');
    
  } catch (error) {
    console.error('Error creating release:', error);
    throw error;
  }
};

/**
 * Update a release (admin function)
 * @param {string} id - Release ID
 * @param {Object} updates - Updated release data
 * @returns {Promise<Object>} Updated release object
 */
export const updateRelease = async (id, updates) => {
  try {
    // TODO: Replace with actual API call
    // return await apiClient.put(`/releases/${id}`, updates);
    
    // TODO: Or use Airtable
    // return await airtableClient.updateRecord('Releases', id, updates);
    
    console.log('Update release:', id, updates);
    throw new Error('Release update not implemented yet');
    
  } catch (error) {
    console.error('Error updating release:', error);
    throw error;
  }
};

/**
 * Delete a release (admin function)
 * @param {string} id - Release ID
 * @returns {Promise<void>}
 */
export const deleteRelease = async (id) => {
  try {
    // TODO: Replace with actual API call
    // return await apiClient.delete(`/releases/${id}`);
    
    // TODO: Or use Airtable
    // return await airtableClient.deleteRecord('Releases', id);
    
    console.log('Delete release:', id);
    throw new Error('Release deletion not implemented yet');
    
  } catch (error) {
    console.error('Error deleting release:', error);
    throw error;
  }
};

export default {
  getReleases,
  getRelease,
  getFeaturedReleases,
  getReleasesByArtist,
  searchReleases,
  getReleaseTypes,
  getReleaseGenres,
  createRelease,
  updateRelease,
  deleteRelease,
};

