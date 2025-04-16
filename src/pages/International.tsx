
import React from 'react';
import Layout from '@/components/Layout/Layout';
import InternationalHero from '@/components/International/InternationalHero';
import InvestmentReasons from '@/components/International/InvestmentReasons';
import TailoredServices from '@/components/International/TailoredServices';
import InvestmentIncentives from '@/components/International/InvestmentIncentives';
import SectorOpportunities from '@/components/International/SectorOpportunities';
import CountrySelector from '@/components/International/CountrySelector';
import InternationalNews from '@/components/International/InternationalNews';
import InternationalCTA from '@/components/International/InternationalCTA';

const International = () => {
  return (
    <Layout>
      <InternationalHero />
      <InvestmentReasons />
      <TailoredServices />
      <InvestmentIncentives />
      <SectorOpportunities />
      <CountrySelector />
      <InternationalNews />
      <InternationalCTA />
    </Layout>
  );
};

export default International;
