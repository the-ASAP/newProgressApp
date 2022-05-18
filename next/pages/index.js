import React from 'react';
import Head from 'next/head';
import PromoSection from 'components/sections/PromoSection';
import MarqueeSection from 'components/sections/MarqueeSection';
import ProjectsSection from 'components/sections/ProjectsSection';
import SkillsSection from 'components/sections/SkillsSection';
import ConsulSection from 'components/sections/ConsulSection';
import TalentsSection from 'components/sections/TalentsSection';
import ExperienceSection from 'components/sections/ExperienceSection';
import DirectorSection from 'components/sections/DirectorSection';
import SERVICE_API from 'api';
import styles from 'styles/pages/main.module.scss';

const Index = () => {
  return (
    <div className={styles.main_container}>
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
    </div>
  );
};

export default Index;

export async function getStaticProps() {
  return {
    props: {}
  };
}
