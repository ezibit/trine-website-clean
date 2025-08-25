import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/trinelogosketch1.png';

const ArtistsPage = () => {
  // Mock data for artists
  const allArtists = [
    {
      id: 1,
      name: 'Ascension Instruments',
      image: firstWaveArt, // Using the album art for now as artist image
      genre: 'Synthwave, Electronic, Pop, Bass, Dubstep',
      bio: 'Produced in tune with the static. We are the Signal.',
    },
    {
      id: 2,
      name: 'Algo Rhythm',
      image: logo, // Placeholder, will be replaced with actual artist image
      genre: 'Hybrid Dubstep',
      bio: 'Creating algorithmic bass music that defies conventional sound design.',
    },
    {
      id: 3,
      name: 'Neural Nexus',
      image: logo, // Placeholder, will be replaced with actual artist image
      genre: 'Neuro-Glitch',
      bio: 'Exploring the intersection of glitch aesthetics and audio synthesis.',
    },
    {
      id: 4,
      name: 'Quantum Harmonics',
      image: logo, // Placeholder, will be replaced with actual artist image
      genre: 'Ambient / Experimental',
      bio: 'Generating ethereal soundscapes through quantum computing sound design.',
    },
    {
      id: 5,
      name: 'Deep Dream Audio',
      image: logo, // Placeholder, will be replaced with actual artist image
      genre: 'Psychedelic Electronic',
      bio: 'Translating visual deep dream brain activity into immersive audio experiences.',
    },
    {
      id: 6,
      name: 'Tensor Flow',
      image: logo, // Placeholder, will be replaced with actual artist image
      genre: 'Techno / IDM',
      bio: 'Crafting precision-engineered techno using advanced tensor-based synthesis.',
    },
  ];

  // State for filtering
  const [filterGenre, setFilterGenre] = useState('');
  
  // Get unique genres for filter
  const genres = ['All', ...new Set(allArtists.map(artist => artist.genre))];
  
  // Filter artists based on selected genre
  const filteredArtists = filterGenre && filterGenre !== 'All'
    ? allArtists.filter(artist => artist.genre === filterGenre)
    : allArtists;

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="trine-title text-5xl mb-4 text-white">Our Artists</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Meet the innovative music creators pushing the boundaries of sound on the TRINE label.
        </p>
      </div>

      {/* Genre Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
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

      {/* Artists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArtists.map((artist) => (
          <Link to={`/artists/${artist.id}`} key={artist.id} className="trine-card group">
            <div className="relative aspect-square overflow-hidden">
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="trine-title text-2xl text-white mb-2">{artist.name}</h3>
                  <p className="text-accent text-sm trine-catalog mb-2">{artist.genre}</p>
                  <p className="text-gray-300 line-clamp-2">{artist.bio}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 py-12 border-t border-gray-800">
        <h2 className="trine-title text-3xl mb-6 text-white">Are You Next?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-300">
          TRINE is always looking for innovative music creators pushing the boundaries of sound.
        </p>
        <Link to="/submit" className="trine-button">Submit Your Music</Link>
      </div>
    </div>
  );
};

export default ArtistsPage;

