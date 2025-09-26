import Link from 'next/link';
import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { Button } from "./ui/moving-border";

const HeroSection = () => {
    return (
        <div className='h-auto md:h-[40rem] w-full flex items-center justify-center py-10 rounded-md flex-col relative overflow-hidden mx-auto md:py-0'>
            <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="blue"
      />


            <div className='p-4 relative z-10 w-full text-center'>

                <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the Art of Music</h1>

                <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Join our comprehensive music courses and unlock your full potential. Whether you are a beginner or an advanced musician, we have the perfect course for you.</p>

                <div className='mt-4'>
                    <Link href="/courses">
                    <Button>Explore Courses</Button>
                    </Link>
                     </div>
            </div>
        </div>
    );
};

export default HeroSection;