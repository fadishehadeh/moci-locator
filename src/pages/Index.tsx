
import React from 'react';
import Layout from '@/components/Layout/Layout';
import HeroSection from '@/components/Home/HeroSection';
import UserSegments from '@/components/Home/UserSegments';
import PopularServices from '@/components/Home/PopularServices';
import RegionalSection from '@/components/Home/RegionalSection';
import EconomicSnapshot from '@/components/Home/EconomicSnapshot';
import SuccessStories from '@/components/Home/SuccessStories';
import InvestmentInfographic from '@/components/Home/InvestmentInfographic';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <UserSegments />
      <PopularServices />
      <InvestmentInfographic />
      <RegionalSection />
      <EconomicSnapshot />
      <SuccessStories />
    </Layout>
  );
};

export default Index;
