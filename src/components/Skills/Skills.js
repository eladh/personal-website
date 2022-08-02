import React from 'react';
import styled from 'styled-components';

import PageHeader from '@src/components/common/PageHeader';
import Flex from '@src/components/common/Flex';
import {  ParallaxProvider } from 'react-scroll-parallax';

const SkillsWrapper = styled.section`
  ${props => props.theme.spacing.sectionBottom};
  position: relative;
  .skill__icons {
    padding: 30px 0;
    @media ${props => props.theme.media.tablet} {
      padding: 10px 0;
    }

    svg {
      color: ${props => props.theme.primaryColor};
    }
  }
  .skills__word-clouds {
    @media ${props => props.theme.media.tablet} {
      display: none;
    }

    p {
      position: absolute;
      color: ${props => props.theme.accentColor};
      z-index: -1;
      left: 0;
      right: 0;
      font-weight: 900;
      user-select: none;
    }
    z-index: -1;
  }
`;


const Skills = () => (
  <SkillsWrapper>
    <ParallaxProvider>
      <PageHeader>Certificates</PageHeader>

      {/* <SkillPie percent={90} name={"JavaScript"} /> */}
      <Flex className="skill__icons" justify="space-around" align="center">
      <img width="200px" src="https://images.credly.com/size/680x680/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png" alt="Elad Hirsch" />
      <img width="200px" src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/01/cka-article-image.png" alt="Elad Hirsch" />
      <img width="200px" src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Professional_badge.69d82ff1b2861e1089539ebba906c70b011b928a.png" alt="Elad Hirsch" />
      <img width="200px" src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Data-Analytics-Specialty_badge.c74203ecf6d7c4889d01d8b4ba5c9df6e69c6f43.png" alt="Elad Hirsch" />
      <img width="200px" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/3a/9d2a7af297483a845340bcfbac6f1e/MLS.course-banners-01_Course-Logo-.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25" alt="Elad Hirsch" />
      </Flex>
    </ParallaxProvider>
  </SkillsWrapper>
);

export default Skills;
