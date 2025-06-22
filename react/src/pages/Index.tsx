import Navbar from '@/components/home/navbar/Navbar';
import React from 'react';
import HeroSection from '../components/home/HeroSection/HeroSection';
import FeaturedRestaurants from '../components/home/FeaturedRestaurants/FeaturedRestaurants';
import CallToAction from '../components/home/CallToAction/CallToAction';


const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />
      <HeroSection/>
      <FeaturedRestaurants/>
      <CallToAction/>
    </div>
  );
};

export default Index;
