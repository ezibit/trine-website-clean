import React from 'react';
import { useParams, Link } from 'react-router-dom';
import logo from '../assets/images/trinelogosketch1.png';
import firstWaveArt from '../assets/images/1st_wave_album_art_1400x1400.png';

const ReleaseDetailPage = () => {
  const { id } = useParams();

  // If no valid release is found, show a message
  if (!['001', '002', '003', '004'].includes(id)) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="trine-title text-4xl text-white mb-4">Release Not Found</h1>
        <Link to="/releases" className="text-accent hover:underline trine-subtitle">
          ← Back to All Releases
        </Link>
      </div>
    );
  }
  
  // Release data
  const release = {
    id: id,
    title: id === '001' ? '1st Wave' : id === '002' ? 'Quantum Drift' : 'Digital Dreams',
    artist: id === '001' ? 'Ascension Instruments' : id === '002' ? 'Algo Rhythm' : 'Neural Nexus',
    artistId: id === '001' ? '001' : id === '002' ? '002' : '003',
    image: id === '001' ? firstWaveArt : logo,
    releaseDate: id === '001' ? '2025-08-08' : id === '002' ? '2025-04-22' : '2025-03-10',
    type: id === '001' ? 'LP' : id === '002' ? 'LP' : 'Single',
    genre: id === '001' ? 'Synthwave, Electronic, Pop' : id === '002' ? 'Hybrid Dubstep' : 'Neuro-Glitch',
    catalogNumber: `TRINE-00${id}`,
    description: id === '001' ? `1st Wave is a transmission from the Drift — encoded with symbolic narrative, harmonic key patterns, and post-linear rhythm cycles. This isn't just music, it's an auditory artifact crafted by Ascension Instruments using next-gen compositional tools, neural synthesis, and hybrid modular workflows.` : `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    aiTools: ['Suno v4.5', 'Custom Neural Networks', 'Proprietary Synthesis Engine'],
    bandcampData: id === '001' ? {
      albumId: '423037208',
      url: 'https://ascensioninstruments.bandcamp.com/album/1st-wave'
    } : null,
    streamingLinks: {
      bandcamp: 'https://ascensioninstruments.bandcamp.com/album/1st-wave',
      appleMusic: 'https://music.apple.com',
      soundcloud: 'https://soundcloud.com'
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
      
      {/* Music Player */}
      <section className="mb-16">
        <h2 className="trine-title text-3xl mb-6 text-white">Listen</h2>
        {id === '001' && (
          <div className="w-full max-w-4xl mx-auto">
            <div className="aspect-[4/3] w-full">
              <iframe 
                className="w-full h-full"
                src="https://bandcamp.com/EmbeddedPlayer/v=2/album=423037208/size=large/tracklist=true/artwork=small/" 
                allow="autoplay"
                onLoad={(e) => {
                  console.log('Bandcamp iframe loaded');
                  console.log(e.target);
                }}
                onError={(e) => {
                  console.error('Bandcamp iframe error:', e);
                }}
              >
                <a href="https://ascensioninstruments.bandcamp.com/album/1st-wave">1st Wave by Ascension Instruments</a>
              </iframe>
            </div>
          </div>
        )}
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

