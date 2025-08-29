import React from 'react';
import { useParams, Link } from 'react-router-dom';
import BandcampPlayer from 'react-bandcamp';
import logo from '../assets/images/trinelogosketch1.png';
import firstWaveArt from '../assets/images/1st_wave_album_art_1400x1400.png';

const ArtistDetailPage = () => {
  const { id } = useParams();
  
  // Mock artist data (in a real app, this would be fetched based on the ID)
  const artist = {
    id: parseInt(id),
    name: id === '001' ? 'Ascension Instruments' : id === '002' ? 'Algo Rhythm' : 'Neural Nexus',
    image: firstWaveArt, // Using album art for now
    genre: id === '001' ? 'Synthwave, Electronic, Pop, Bass, Dubstep' : id === '002' ? 'Hybrid Dubstep' : 'Neuro-Glitch',
    bio: `Ascension Instruments is not an artist — it's a vessel. Crafted by a transdimensional architect working in concert with algorithmic synthesis and encrypted harmonics from future timelines. Each composition is an auditory artefact, tuned to resonate with evolving human perception.

    Ascension Instruments is the anonymous signal conductor translating data from the Drift — the zone between dimensions, where sound is used not for entertainment, but activation. Using next-gen compositional tools, neural synthesis, and hybrid modular workflows, Ascension Instruments creates immersive audio artefacts encoded with symbolic narrative, harmonic key patterns, and post-linear rhythm cycles.
    
    This isn't music. It's a transmission. A code. A test. A doorway.`,
    location: 'Australia',
    socialLinks: {
      facebook: 'https://www.facebook.com/AscensionInstruments/',
      bandcamp: 'https://ascensioninstruments.bandcamp.com/community',
      instagram: 'https://www.instagram.com/ascension_instruments/',
    },
    aiTools: ['FL Studio', 'OZONE Pro 11', 'ChatGPT 5', 'Suno 4.5+', 'Suno studio beta', 'UVR 5', 'RipX DAW', 'Audacity'],
    bandcampEmbed: id === '001' ? 'https://bandcamp.com/EmbeddedPlayer/album=423037208/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/' : null,
  };

  // If no valid artist is found, show a message
  if (!['001', '002', '003'].includes(id)) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="trine-title text-4xl text-white mb-4">Artist Not Found</h1>
        <Link to="/artists" className="text-accent hover:underline trine-subtitle">
          ← Back to All Artists
        </Link>
      </div>
    );
  }

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
      
      {/* Artist Music */}
      <section className="mb-16">
        <h2 className="trine-title text-3xl mb-6 text-white">Music</h2>
        <div className="w-full max-w-4xl mx-auto">
          {id === '001' && (
            <>
              <div className="bg-gray-900 p-4 rounded-lg">
                <div style={{ width: '100%', height: '700px' }}>
                  <BandcampPlayer
                    album="423037208"
                    size="large"
                    width="100%"
                    height="700px"
                    bgColor="333333"
                    linkColor="ffffff"
                    tracklist={true}
                    artwork="small"
                    transparent={true}
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <a 
                  href="https://ascensioninstruments.bandcamp.com/album/1st-wave" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Open in Bandcamp
                </a>
              </div>
            </>
          )}
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

