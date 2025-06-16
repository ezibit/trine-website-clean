/**
 * Custom React Hooks for TRINE AI Music Label
 * 
 * These hooks provide a clean interface for data fetching and state management.
 */

import { useState, useEffect, useCallback } from 'react';
import { getArtists, getArtist, getFeaturedArtists, searchArtists } from '../data/artists.js';
import { getReleases, getRelease, getFeaturedReleases, searchReleases } from '../data/releases.js';
import { submitArtistForm, submitContactForm, subscribeToNewsletter } from '../data/api.js';

/**
 * Generic hook for async data fetching
 * @param {Function} fetchFunction - Function that returns a promise
 * @param {Array} dependencies - Dependencies for useEffect
 * @returns {Object} { data, loading, error, refetch }
 */
export const useAsyncData = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchFunction();
      setData(result);
    } catch (err) {
      setError(err.message || 'An error occurred');
      console.error('Data fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, dependencies);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch };
};

/**
 * Hook for fetching artists
 * @param {Object} filters - Optional filters
 * @returns {Object} { artists, loading, error, refetch }
 */
export const useArtists = (filters = {}) => {
  const { data: artists, loading, error, refetch } = useAsyncData(
    () => getArtists(filters),
    [JSON.stringify(filters)]
  );

  return { artists, loading, error, refetch };
};

/**
 * Hook for fetching a single artist
 * @param {string} artistId - Artist ID
 * @returns {Object} { artist, loading, error, refetch }
 */
export const useArtist = (artistId) => {
  const { data: artist, loading, error, refetch } = useAsyncData(
    () => getArtist(artistId),
    [artistId]
  );

  return { artist, loading, error, refetch };
};

/**
 * Hook for fetching featured artists
 * @param {number} limit - Maximum number of artists
 * @returns {Object} { artists, loading, error, refetch }
 */
export const useFeaturedArtists = (limit = 3) => {
  const { data: artists, loading, error, refetch } = useAsyncData(
    () => getFeaturedArtists(limit),
    [limit]
  );

  return { artists, loading, error, refetch };
};

/**
 * Hook for fetching releases
 * @param {Object} filters - Optional filters
 * @returns {Object} { releases, loading, error, refetch }
 */
export const useReleases = (filters = {}) => {
  const { data: releases, loading, error, refetch } = useAsyncData(
    () => getReleases(filters),
    [JSON.stringify(filters)]
  );

  return { releases, loading, error, refetch };
};

/**
 * Hook for fetching a single release
 * @param {string} releaseId - Release ID
 * @returns {Object} { release, loading, error, refetch }
 */
export const useRelease = (releaseId) => {
  const { data: release, loading, error, refetch } = useAsyncData(
    () => getRelease(releaseId),
    [releaseId]
  );

  return { release, loading, error, refetch };
};

/**
 * Hook for fetching featured releases
 * @param {number} limit - Maximum number of releases
 * @returns {Object} { releases, loading, error, refetch }
 */
export const useFeaturedReleases = (limit = 3) => {
  const { data: releases, loading, error, refetch } = useAsyncData(
    () => getFeaturedReleases(limit),
    [limit]
  );

  return { releases, loading, error, refetch };
};

/**
 * Hook for search functionality
 * @param {string} query - Search query
 * @param {string} type - Search type ('artists' or 'releases')
 * @returns {Object} { results, loading, error, search }
 */
export const useSearch = (initialQuery = '', type = 'artists') => {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(async (searchQuery) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const searchFunction = type === 'artists' ? searchArtists : searchReleases;
      const searchResults = await searchFunction(searchQuery);
      
      setResults(searchResults);
    } catch (err) {
      setError(err.message || 'Search failed');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  }, [type]);

  useEffect(() => {
    if (query) {
      const timeoutId = setTimeout(() => {
        search(query);
      }, 300); // Debounce search

      return () => clearTimeout(timeoutId);
    } else {
      setResults([]);
    }
  }, [query, search]);

  const updateQuery = useCallback((newQuery) => {
    setQuery(newQuery);
  }, []);

  return { query, results, loading, error, search, updateQuery };
};

/**
 * Hook for form submissions
 * @param {Function} submitFunction - Function to handle form submission
 * @returns {Object} { submit, loading, error, success }
 */
export const useFormSubmission = (submitFunction) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submit = useCallback(async (formData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      
      await submitFunction(formData);
      setSuccess(true);
      
    } catch (err) {
      setError(err.message || 'Submission failed');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  }, [submitFunction]);

  const reset = useCallback(() => {
    setError(null);
    setSuccess(false);
  }, []);

  return { submit, loading, error, success, reset };
};

/**
 * Hook for artist form submission
 * @returns {Object} { submitArtist, loading, error, success, reset }
 */
export const useArtistSubmission = () => {
  const { submit, loading, error, success, reset } = useFormSubmission(submitArtistForm);
  
  return { 
    submitArtist: submit, 
    loading, 
    error, 
    success, 
    reset 
  };
};

/**
 * Hook for contact form submission
 * @returns {Object} { submitContact, loading, error, success, reset }
 */
export const useContactSubmission = () => {
  const { submit, loading, error, success, reset } = useFormSubmission(submitContactForm);
  
  return { 
    submitContact: submit, 
    loading, 
    error, 
    success, 
    reset 
  };
};

/**
 * Hook for newsletter subscription
 * @returns {Object} { subscribe, loading, error, success, reset }
 */
export const useNewsletterSubscription = () => {
  const { submit, loading, error, success, reset } = useFormSubmission(subscribeToNewsletter);
  
  return { 
    subscribe: submit, 
    loading, 
    error, 
    success, 
    reset 
  };
};

/**
 * Hook for local storage state
 * @param {string} key - Storage key
 * @param {*} defaultValue - Default value
 * @returns {Array} [value, setValue]
 */
export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return defaultValue;
    }
  });

  const setStoredValue = useCallback((newValue) => {
    try {
      setValue(newValue);
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key]);

  return [value, setStoredValue];
};

/**
 * Hook for debounced values
 * @param {*} value - Value to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {*} Debounced value
 */
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

/**
 * Hook for window size
 * @returns {Object} { width, height, isMobile, isTablet, isDesktop }
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    ...windowSize,
    isMobile: windowSize.width < 768,
    isTablet: windowSize.width >= 768 && windowSize.width < 1024,
    isDesktop: windowSize.width >= 1024,
  };
};

