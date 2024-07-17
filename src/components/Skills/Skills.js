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
      <PageHeader>Certifications</PageHeader>

      {/* <SkillPie percent={90} name={"JavaScript"} /> */}
      <Flex className="skill__icons" justify="space-around" align="center">
      <img width="200px" src="https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" alt="Elad Hirsch" />
      <img width="200px" src="https://images.credly.com/images/2d84e428-9078-49b6-a804-13c15383d0de/twitter_thumb_201604_image.png" alt="Elad Hirsch" />
      <img width="200px" src="https://images.credly.com/images/f88d800c-5261-45c6-9515-0458e31c3e16/ckad_from_cncfsite.png" alt="Elad Hirsch" />

      </Flex>
       <Flex className="skill__icons" justify="space-around" align="center">
      <img width="200px" src="https://images.credly.com/images/8b8ed108-e77d-4396-ac59-2504583b9d54/twitter_thumb_201604_cka_from_cncfsite__281_29.png" alt="Elad Hirsch" />
      <img width="200px" src="https://miro.medium.com/v2/resize:fit:800/1*KtMvyhCwgABkXSvL0wGleg.png" alt="Elad Hirsch" />
      <img width="200px" src="https://training.linuxfoundation.org/wp-content/uploads/2023/01/kcsa_badge_new-300x300.png" alt="Elad Hirsch" />

      </Flex>

      <Flex className="skill__icons" justify="space-around" align="center">
      <img width="200px" src="https://templates.images.credential.net/16704800247838205477668293844669.png" alt="Elad Hirsch" />
      <img width="200px" src="https://images.credly.com/size/680x680/images/85b9cfc4-257a-4742-878c-4f7ab4a2631b/image.png" alt="Elad Hirsch" />
      <img width="200px" src="https://images.squarespace-cdn.com/content/v1/59eba2127131a59c37aec8e6/1510760028933-Q6288GA8LV4IJ4CN4WKM/microsoft_mcse_logo_by_mrinfo2012-d48om4j.png" alt="Elad Hirsch" />

      </Flex>
    </ParallaxProvider>
  </SkillsWrapper>
);

export default Skills;
