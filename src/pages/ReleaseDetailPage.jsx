import React from 'react';
import { useParams, Link } from 'react-router-dom';
import logo from '../assets/images/trinelogosketch1.png';

const ReleaseDetailPage = () => {
  const { id } = useParams();
  
  // Mock release data (in a real app, this would be fetched based on the ID)
  const release = {
    id: parseInt(id),
    title: id === '1' ? 'Neural Cascade' : id === '2' ? 'Quantum Drift' : 'Digital Dreams',
    artist: id === '1' ? 'Synapse' : id === '2' ? 'Algo Rhythm' : 'Neural Nexus',
    artistId: id === '1' ? 1 : id === '2' ? 2 : 3,
    image: logo, // Placeholder, will be replaced with actual artwork
    releaseDate: id === '1' ? '2025-05-15' : id === '2' ? '2025-04-22' : '2025-03-10',
    type: id === '1' ? 'EP' : id === '2' ? 'LP' : 'Single',
    genre: id === '1' ? 'AI-driven Synthwave' : id === '2' ? 'Hybrid Dubstep' : 'Neuro-Glitch',
    catalogNumber: `TRINE-00${id}`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
    
    Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.`,
    aiTools: ['Suno v4.5', 'Custom Neural Networks', 'Proprietary Synthesis Engine'],
    tracks: [
      {
        number: 1,
        title: 'Neural Pathways',
        duration: '4:32',
        isExplicit: false,
      },
      {
        number: 2,
        title: 'Synthetic Emotions',
        duration: '3:45',
        isExplicit: false,
      },
      {
        number: 3,
        title: 'Digital Consciousness',
        duration: '5:17',
        isExplicit: false,
      },
      {
        number: 4,
        title: 'Quantum Entanglement',
        duration: '6:08',
        isExplicit: false,
      },
    ],
    streamingLinks: {
      spotify: 'https://spotify.com',
      appleMusic: 'https://music.apple.com',
      soundcloud: 'https://soundcloud.com',
      bandcamp: 'https://bandcamp.com',
    },
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Release Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        {/* Release Artwork */}
        <div className="w-full md:w-1/3">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img 
              src={release.image} 
              alt={release.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Release Info */}
        <div className="w-full md:w-2/3">
          <p className="text-accent text-sm trine-catalog mb-2">{release.catalogNumber}</p>
          <h1 className="trine-title text-4xl md:text-5xl mb-4 text-white">{release.title}</h1>
          <Link to={`/artists/${release.artistId}`} className="text-white hover:text-accent text-xl mb-4 inline-block">
            {release.artist}
          </Link>
          
          <div className="flex flex-wrap gap-4 my-6">
            <div className="bg-gray-800 px-4 py-2 rounded-lg">
              <span className="text-gray-400 text-sm">Release Date</span>
              <p className="text-white">
                {new Date(release.releaseDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            
            <div className="bg-gray-800 px-4 py-2 rounded-lg">
              <span className="text-gray-400 text-sm">Type</span>
              <p className="text-white">{release.type}</p>
            </div>
            
            <div className="bg-gray-800 px-4 py-2 rounded-lg">
              <span className="text-gray-400 text-sm">Genre</span>
              <p className="text-white">{release.genre}</p>
            </div>
          </div>
          
          {/* Streaming Links */}
          <div className="mb-8">
            <h2 className="trine-subtitle text-xl mb-3 text-white">Listen Now</h2>
            <div className="flex flex-wrap gap-3">
              {Object.entries(release.streamingLinks).map(([platform, url]) => (
                <a 
                  key={platform} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                  {platform.replace(/([A-Z])/g, ' $1').trim()}
                </a>
              ))}
            </div>
          </div>
          
          {/* AI Tools */}
          <div className="mb-8">
            <h2 className="trine-subtitle text-xl mb-3 text-white">AI Tools & Technology</h2>
            <div className="flex flex-wrap gap-2">
              {release.aiTools.map((tool, index) => (
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
      
      {/* Tracklist */}
      <section className="mb-16">
        <h2 className="trine-title text-3xl mb-6 text-white">Tracklist</h2>
        <div className="bg-gray-900/50 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-black/50">
              <tr>
                <th className="py-4 px-6 text-left text-gray-400">#</th>
                <th className="py-4 px-6 text-left text-gray-400">Title</th>
                <th className="py-4 px-6 text-right text-gray-400">Duration</th>
              </tr>
            </thead>
            <tbody>
              {release.tracks.map((track) => (
                <tr key={track.number} className="border-t border-gray-800 hover:bg-black/30">
                  <td className="py-4 px-6 text-gray-400">{track.number}</td>
                  <td className="py-4 px-6 text-white">
                    {track.title}
                    {track.isExplicit && (
                      <span className="ml-2 bg-gray-700 text-gray-300 text-xs px-1.5 py-0.5 rounded">
                        E
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-right text-gray-400">{track.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
      {/* Release Description */}
      <section className="mb-16">
        <h2 className="trine-title text-3xl mb-6 text-white">About This Release</h2>
        <div className="prose prose-invert max-w-none">
          {release.description.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-300">{paragraph}</p>
          ))}
        </div>
      </section>
      
      {/* Back to Releases */}
      <div className="text-center">
        <Link to="/releases" className="text-accent hover:underline trine-subtitle">
          ← Back to All Releases
        </Link>
      </div>
    </div>
  );
};

export default ReleaseDetailPage;

