"use client"
import Link from 'next/link'
import { HoverEffect } from "./ui/card-hover-effect";

export default function UpcomingWebiners() {

     const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];
  return (
    <div className='p-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center '>
                <h2  className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Webiners</h2>
                <p className='mt-2 tracking-tight font-extrabold text-3xl leading-7'>Enhance Your Journey</p>

            </div>

            <div className='mt-10'>
                <HoverEffect items={featuredWebinars.map(webiner =>(
                    {
                        title: webiner.title,
                        description: webiner.description,
                        link: "/webinars/" + webiner.slug
                    }
                ))} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" />

            </div>

            <div className='mt-10 text-center'>
                <Link href={"/"} className='rounded-2xl p-4 border border-neutral-600  text-white bg-black hover:bg-gray-600'>Learn more </Link>
                
            </div>
        </div>
    </div>
  )
}
