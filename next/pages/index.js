import React from 'react';
import Head from 'next/head';
import PromoSection from 'components/pageComponents/Home/PromoSection';
import MarqueeSection from 'components/pageComponents/Home/MarqueeSection';
import ProjectsSection from 'components/pageComponents/Home/ProjectsSection';
import SkillsSection from 'components/pageComponents/Home/SkillsSection';
import ConsulSection from 'components/pageComponents/Home/ConsulSection';
import TalentsSection from 'components/pageComponents/Home/TalentsSection';
import ExperienceSection from 'components/pageComponents/Home/ExperienceSection';
import DirectorSection from 'components/pageComponents/Home/DirectorSection';
import SERVICE_API from 'api';
import Layout from 'components/layout';
import OwnProductsSection from 'components/pageComponents/Home/OwnProductsSection';

const Index = () => {
  return (
    <>
      <Head>
        <title>ProgressApp</title>
      </Head>
      <PromoSection />
      <MarqueeSection />
      <OwnProductsSection />
      <ProjectsSection />
      <SkillsSection />
      <ConsulSection />
      <TalentsSection />
      <ExperienceSection />
      <DirectorSection />
    </>
  );
};

export default Index;

Index.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  return {
    props: {}
  };
}
