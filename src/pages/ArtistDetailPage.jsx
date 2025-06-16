import React from 'react';
import { useParams, Link } from 'react-router-dom';
import logo from '../assets/images/trinelogosketch1.png';

const ArtistDetailPage = () => {
  const { id } = useParams();
  
  // Mock artist data (in a real app, this would be fetched based on the ID)
  const artist = {
    id: parseInt(id),
    name: id === '1' ? 'Synapse' : id === '2' ? 'Algo Rhythm' : 'Neural Nexus',
    image: logo, // Placeholder, will be replaced with actual artist image
    genre: id === '1' ? 'AI-driven Synthwave' : id === '2' ? 'Hybrid Dubstep' : 'Neuro-Glitch',
    bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
    
    Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.`,
    location: 'Digital Realm',
    socialLinks: {
      website: 'https://example.com',
      soundcloud: 'https://soundcloud.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
    aiTools: ['Suno v4.5', 'Custom Neural Networks', 'Proprietary Synthesis Engine'],
    releases: [
      {
        id: 1,
        title: 'Neural Cascade',
        image: logo, // Placeholder, will be replaced with actual artwork
        releaseDate: '2025-05-15',
        type: 'EP',
      },
      {
        id: 2,
        title: 'Digital Dreams',
        image: logo, // Placeholder, will be replaced with actual artwork
        releaseDate: '2025-03-10',
        type: 'Single',
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Artist Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        {/* Artist Image */}
        <div className="w-full md:w-1/3">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img 
              src={artist.image} 
              alt={artist.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Artist Info */}
        <div className="w-full md:w-2/3">
          <h1 className="trine-title text-4xl md:text-5xl mb-4 text-white">{artist.name}</h1>
          <p className="text-accent text-lg trine-catalog mb-4">{artist.genre}</p>
          <p className="text-gray-300 mb-6">{artist.location}</p>
          
          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {Object.entries(artist.socialLinks).map(([platform, url]) => (
              <a 
                key={platform} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
              >
                <span className="sr-only">{platform}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
            ))}
          </div>
          
          {/* AI Tools */}
          <div className="mb-8">
            <h2 className="trine-subtitle text-xl mb-3 text-white">AI Tools & Technology</h2>
            <div className="flex flex-wrap gap-2">
              {artist.aiTools.map((tool, index) => (
                <span 
                  key={index} 
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Artist Bio */}
      <section className="mb-16">
        <h2 className="trine-title text-3xl mb-6 text-white">Biography</h2>
        <div className="prose prose-invert max-w-none">
          {artist.bio.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-300">{paragraph}</p>
          ))}
        </div>
      </section>
      
      {/* Artist Releases */}
      <section className="mb-16">
        <h2 className="trine-title text-3xl mb-6 text-white">Releases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artist.releases.map((release) => (
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
                    <p className="text-accent text-sm trine-catalog">
                      {release.type} • {new Date(release.releaseDate).toLocaleDateString('en-US', { 
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
      
      {/* Back to Artists */}
      <div className="text-center">
        <Link to="/artists" className="text-accent hover:underline trine-subtitle">
          ← Back to All Artists
        </Link>
      </div>
    </div>
  );
};

export default ArtistDetailPage;

