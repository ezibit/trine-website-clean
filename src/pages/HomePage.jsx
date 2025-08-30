import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/trinelogosketch1.png';
import firstWaveArt from '../assets/images/1st_wave_album_art_1400x1400.png';

const HomePage = () => {
  // Featured releases
  const featuredReleases = [
    {
      id: 1,
      title: '1st Wave',
      artist: 'Ascension Instruments',
      image: firstWaveArt,
      releaseDate: '2025-08-08',
    },
    {
      id: 2,
      title: 'Quantum Drift',
      artist: 'Algo Rhythm',
      image: logo, // Placeholder, will be replaced with actual artwork
      releaseDate: '2025-04-22',
    },
    {
      id: 3,
      title: 'Digital Dreams',
      artist: 'Neural Nexus',
      image: logo, // Placeholder, will be replaced with actual artwork
      releaseDate: '2025-03-10',
    },
  ];

  // Mock data for featured artists
  const featuredArtists = [
    {
      id: 1,
      name: 'Ascension Instruments',
      image: firstWaveArt,
      genre: 'Synthwave, Electronic, Pop',
    },
    {
      id: 2,
      name: 'Algo Rhythm',
      image: logo, // Placeholder, will be replaced with actual artist image
      genre: 'Hybrid Dubstep',
    },
    {
      id: 3,
      name: 'Neural Nexus',
      image: logo, // Placeholder, will be replaced with actual artist image
      genre: 'Neuro-Glitch',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center">
        <img src={logo} alt="TRINE Records" className="w-32 h-32 mb-6 animate-pulse" />
        <h1 className="trine-logo-text text-5xl md:text-7xl mb-4 text-white">TRINE</h1>
        <h2 className="trine-subtitle text-xl md:text-2xl mb-8 text-accent">SONIC TECHNOLOGY</h2>
        <p className="max-w-2xl text-lg mb-10 text-gray-300">
          TRINE is a signal intelligence agency disguised as a record label.
We curate dimensional drift signals, harmonic transcriptions, and post-organic compositions from composers working at the edges of reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/releases" className="trine-button">Explore Releases</Link>
          <Link to="/submit" className="trine-button bg-white text-black hover:bg-gray-200">Submit Your Music</Link>
        </div>
      </section>

      {/* Featured Releases Section */}
      <section className="py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="trine-title text-3xl text-white">Featured Releases</h2>
          <Link to="/releases" className="text-accent hover:underline trine-subtitle">View All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredReleases.map((release) => (
            <Link to={`/releases/${release.id}`} key={release.id} className="trine-card group">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={release.image} 
                  alt={release.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <div>
                    <h3 className="trine-title text-xl text-white">{release.title}</h3>
                    <p className="text-gray-300">{release.artist}</p>
                    <p className="text-accent text-sm trine-catalog">
                      {new Date(release.releaseDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="trine-title text-3xl text-white">Featured Artists</h2>
          <Link to="/artists" className="text-accent hover:underline trine-subtitle">View All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtists.map((artist) => (
            <Link to={`/artists/${artist.id}`} key={artist.id} className="trine-card group">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <div>
                    <h3 className="trine-title text-xl text-white">{artist.name}</h3>
                    <p className="text-accent text-sm trine-catalog">{artist.genre}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="trine-title text-3xl md:text-4xl mb-6 text-white">Join the Movement</h2>
          <p className="text-lg mb-8 text-gray-300">
           💠 A label for sonic technologies beyond the veil. Curating dimensional audio artefacts and frequency anomalies. We don't sign artists.
We decode transmissions.
          </p>
          <Link to="/submit" className="trine-button text-lg px-8 py-4">Submit Your Music</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

