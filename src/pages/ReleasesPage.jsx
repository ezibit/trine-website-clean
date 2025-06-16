import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Trinelogosketch1.png';

const ReleasesPage = () => {
  // Mock data for releases
  const allReleases = [
    {
      id: 1,
      title: 'Neural Cascade',
      artist: 'Synapse',
      artistId: 1,
      image: logo, // Placeholder, will be replaced with actual artwork
      releaseDate: '2025-05-15',
      type: 'EP',
      genre: 'AI-driven Synthwave',
      catalogNumber: 'TRINE-001',
    },
    {
      id: 2,
      title: 'Quantum Drift',
      artist: 'Algo Rhythm',
      artistId: 2,
      image: logo, // Placeholder, will be replaced with actual artwork
      releaseDate: '2025-04-22',
      type: 'LP',
      genre: 'Hybrid Dubstep',
      catalogNumber: 'TRINE-002',
    },
    {
      id: 3,
      title: 'Digital Dreams',
      artist: 'Neural Nexus',
      artistId: 3,
      image: logo, // Placeholder, will be replaced with actual artwork
      releaseDate: '2025-03-10',
      type: 'Single',
      genre: 'Neuro-Glitch',
      catalogNumber: 'TRINE-003',
    },
    {
      id: 4,
      title: 'Ethereal Algorithms',
      artist: 'Quantum Harmonics',
      artistId: 4,
      image: logo, // Placeholder, will be replaced with actual artwork
      releaseDate: '2025-02-28',
      type: 'EP',
      genre: 'Ambient / Experimental',
      catalogNumber: 'TRINE-004',
    },
    {
      id: 5,
      title: 'Recursive Patterns',
      artist: 'Deep Dream Audio',
      artistId: 5,
      image: logo, // Placeholder, will be replaced with actual artwork
      releaseDate: '2025-01-15',
      type: 'Single',
      genre: 'Psychedelic Electronic',
      catalogNumber: 'TRINE-005',
    },
    {
      id: 6,
      title: 'Tensor Fields',
      artist: 'Tensor Flow',
      artistId: 6,
      image: logo, // Placeholder, will be replaced with actual artwork
      releaseDate: '2025-01-05',
      type: 'LP',
      genre: 'Techno / IDM',
      catalogNumber: 'TRINE-006',
    },
  ];

  // State for filtering
  const [filterType, setFilterType] = useState('');
  const [filterGenre, setFilterGenre] = useState('');
  
  // Get unique types and genres for filters
  const types = ['All', ...new Set(allReleases.map(release => release.type))];
  const genres = ['All', ...new Set(allReleases.map(release => release.genre))];
  
  // Filter releases based on selected type and genre
  const filteredReleases = allReleases.filter(release => {
    const matchesType = !filterType || filterType === 'All' || release.type === filterType;
    const matchesGenre = !filterGenre || filterGenre === 'All' || release.genre === filterGenre;
    return matchesType && matchesGenre;
  });

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="trine-title text-5xl mb-4 text-white">Releases</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Explore our catalog of cutting-edge AI-generated music releases.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
          {/* Type Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            <span className="text-white self-center mr-2">Type:</span>
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 rounded-full transition-all ${
                  filterType === type || (type === 'All' && !filterType)
                    ? 'bg-accent text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Genre Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            <span className="text-white self-center mr-2">Genre:</span>
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setFilterGenre(genre)}
                className={`px-4 py-2 rounded-full transition-all ${
                  filterGenre === genre || (genre === 'All' && !filterGenre)
                    ? 'bg-accent text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Releases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredReleases.map((release) => (
          <Link to={`/releases/${release.id}`} key={release.id} className="trine-card group">
            <div className="relative aspect-square overflow-hidden">
              <img 
                src={release.image} 
                alt={release.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <p className="text-accent text-sm trine-catalog mb-1">{release.catalogNumber}</p>
                  <h3 className="trine-title text-2xl text-white mb-1">{release.title}</h3>
                  <Link to={`/artists/${release.artistId}`} className="text-white hover:text-accent">
                    {release.artist}
                  </Link>
                  <div className="flex items-center mt-2">
                    <span className="bg-accent/20 text-accent px-2 py-0.5 rounded text-xs mr-2">
                      {release.type}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {new Date(release.releaseDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* No Results */}
      {filteredReleases.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-300 text-lg">No releases match your filter criteria.</p>
          <button 
            onClick={() => {
              setFilterType('');
              setFilterGenre('');
            }}
            className="mt-4 text-accent hover:underline"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ReleasesPage;

