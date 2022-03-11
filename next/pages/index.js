import React from 'react';
import Head from 'next/head';
import PromoSection from 'components/sections/PromoSection';
import MarqueeSection from 'components/sections/MarqueeSection';
import ProjectsSection from 'components/sections/ProjectsSection';
import SkillsSection from 'components/sections/SkillsSection';
import ConsulSection from 'components/sections/ConsulSection';
import TalentsSection from 'components/sections/TalentsSection';
import ExperienceSection from 'components/sections/ExperienceSection';
import Footer from 'components/mainComponents/Footer';
import DirectorSection from 'components/sections/DirectorSection';

const Index = () => {
  return (
    <>
      <Head>
        <title>ProgressApp</title>
      </Head>
      <PromoSection />
      <MarqueeSection />
      <ProjectsSection />
      <SkillsSection />
      <ConsulSection />
      <TalentsSection />
      <ExperienceSection />
      <DirectorSection />
      <Footer />
    </>
  );
};

export default Index;
