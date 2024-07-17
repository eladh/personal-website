import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="hfest_avatar_2.jpg" />
        </div>
       <p>
        Hi, I'm Elad Hirsch, Software consultant from
        Israel, currently working as Tech Lead @ CTO Office 
        <a className="about__link" href="https://www.terasky.com">
          <img 
            src="https://awsmp-logos.s3.amazonaws.com/24d2106e-1b83-45e3-aa79-034eb78cd830/32e605957a1817068114d857331631de.png" 
            alt="TeraSky" 
            style={{ width: '100px', height: 'auto' }} 
          />
        </a>
        ,  a global provider of multi-cloud, cloud-native, and innovative IT solutions
        <br />
        
        <br />
       With an experience in principal engineering positions at Agmatix, Jfrog, IDI, and Finjan Security, my primary areas of expertise revolve around software architecture and DevOps practices.
      And proactivly advocate for fostering a DevOps culture, enabling organizations to improve their software architecture and streamline operations in cloud-native environments.

        <br />
      </p>
      </AboutInfo>
    </AboutWrapper>
  );
};

export default About;
