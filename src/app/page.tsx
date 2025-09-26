import HeroSection from '@/components/HeroSection';
import React from 'react';

const Home = () => {
  return (
    <div>
     <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.04]">
        <HeroSection />
      </main>
    </div>
  );
};

export default Home;