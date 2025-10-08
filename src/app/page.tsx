import CardSection from '@/components/CardSection';
import { FeaturedSection } from '@/components/FeaturedSection';
import HeroSection from '@/components/HeroSection';
import Instructors from '@/components/Instructors';
import UpcomingWebiners from '@/components/UpcomingWebiners';
import WhychooseUs from '@/components/WhychooseUs';
import React from 'react';

const Home = () => {
  return (
    <div>
     <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.04]">
        <HeroSection />
        <FeaturedSection></FeaturedSection>
        <WhychooseUs></WhychooseUs>
        <CardSection></CardSection>
        <UpcomingWebiners></UpcomingWebiners>
        <Instructors></Instructors>
      </main>
    </div>
  );
};

export default Home;