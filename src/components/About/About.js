import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="hfest_avatar_2.jpg" />
        </div>
        <p>
          Hi, I'm Elad Hirsch, Software consultant  from
          Israel, currently working as CTO @ {' '}
          <a className="about__link" href="https://www.agmatix.com">
            Agmatix
          </a>{' '} ,leading the development of Agmatix AXIOM platform ,a universal agriculture platform that provides Ag professionals with smart and actionable insights.

          <br />
          <br />

          Over 15 years as a software professional.
          Experienced architect specializing in software architecture, DevOps,
          and Data infrastructure. 
          <br />
          Wide range of projects from hands-on architecture to community relations and advocating at public conferences. 
        </p>
      </AboutInfo>
    </AboutWrapper>
  );
};

export default About;
