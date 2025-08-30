import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/trinelogosketch1.png';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="text-center mb-16">
        <img src={logo} alt="TRINE AI Music Label" className="w-24 h-24 mx-auto mb-6" />
        <h1 className="trine-title text-5xl mb-4 text-white">About TRINE</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          The label for music creators pushing boundaries with originality, emotion, and sonic innovation.
        </p>
      </div>

      {/* Our Story Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="trine-title text-3xl mb-6 text-white">Our Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                TRINE Records was founded in 2025 with a singular vision: to become the premier platform for showcasing the most innovative and boundary-pushing music in the world. With the advent of AI tools in production, we saw an unprecedented opportunity to redefine what music could be and how it could be created.
              </p>
              <p>
                In an era where artificial intelligence has revolutionized creative expression, we recognized the need for a label that treats music not as a novelty, but as a legitimate art form with its own unique aesthetic and creative possibilities.
              </p>
              <p>
                Our name, TRINE, represents the three-way intersection between human creativity, computer driven production, and emotional resonance – the perfect triangle that defines truly exceptional music.
              </p>
            </div>
          </div>
          <div className="bg-gray-900/50 p-8 rounded-lg">
            <blockquote className="text-xl italic text-gray-300">
              "We don't see AI tools as replacing human musicians, but rather as expanding the creative palette available to artists. The most exciting work happens at the intersection of human vision and machine precision. Synthesis, DAWs and AI are just tools – it's the ideas and emotions behind the music that truly matter."
              <footer className="mt-4 text-white">
                <span className="block font-bold">Founder & Creative Director</span>
                <span className="text-accent">TRINE Records</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mb-20">
        <h2 className="trine-title text-3xl mb-6 text-white text-center">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/50 p-8 rounded-lg">
            <div className="text-accent text-4xl mb-4">01</div>
            <h3 className="trine-subtitle text-xl mb-4 text-white">Discover & Nurture</h3>
            <p className="text-gray-300">
              We actively seek out the most innovative music creators no matter what tools theyare using and provide them with the resources, guidance, and platform they need to develop their unique sonic identities.
            </p>
          </div>
          <div className="bg-black/50 p-8 rounded-lg">
            <div className="text-accent text-4xl mb-4">02</div>
            <h3 className="trine-subtitle text-xl mb-4 text-white">Push Boundaries</h3>
            <p className="text-gray-300">
              We encourage our artists to explore the furthest reaches of what's possible with music technology, creating sounds and compositions that challenge conventional notions of electronic music.
            </p>
          </div>
          <div className="bg-black/50 p-8 rounded-lg">
            <div className="text-accent text-4xl mb-4">03</div>
            <h3 className="trine-subtitle text-xl mb-4 text-white">Build Community</h3>
            <p className="text-gray-300">
              We're creating a vibrant ecosystem where Traditional Producers and AI music creators can collaborate, share knowledge, and collectively advance the state of the art in this domain of sonic exploration.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="mb-20">
        <h2 className="trine-title text-3xl mb-10 text-white text-center">What Sets Us Apart</h2>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <div className="aspect-square bg-gray-900/50 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="trine-subtitle text-2xl mb-4 text-white">Artistic Integrity</h3>
              <p className="text-gray-300">
                We believe that AI assisted music deserves the same respect and artistic consideration as traditionally produced music. Good music is good music. Our curation process focuses on originality, emotional impact, and sonic innovation no matter what tools were used to achieve the highest quality listening experience – not just technical novelty or artistic gatekeeping.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 md:order-2">
              <div className="aspect-square bg-gray-900/50 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
            </div>
            <div className="w-full md:w-2/3 md:order-1">
              <h3 className="trine-subtitle text-2xl mb-4 text-white">Technical Innovation</h3>
              <p className="text-gray-300">
                We're at the forefront of music technology, constantly exploring new modes, models, techniques, and approaches. Our artists have access to cutting-edge tools and expertise to push their creative boundaries.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <div className="aspect-square bg-gray-900/50 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="trine-subtitle text-2xl mb-4 text-white">Community Focus</h3>
              <p className="text-gray-300">
                We're building more than just a label – we're creating a community of open-minded creators who are passionate about the future of music. Through events, collaborations, and knowledge sharing, we're fostering a collaborative ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="text-center py-16 bg-gradient-to-b from-black/0 to-black/50 rounded-lg">
        <h2 className="trine-title text-3xl mb-6 text-white">Join the Movement</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-300">
          Whether you're an innovative music creator using loops, sound design or AI assisted tools who is looking for a platform or a fan eager to explore the cutting edge of music, TRINE welcomes you to be part of our journey.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/submit" className="trine-button">Submit Your Music</Link>
          <Link to="/contact" className="trine-button bg-white text-black hover:bg-gray-200">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

