import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import svgRect from '@src/static/home_rect.svg';

import { HeroCard } from './HeroCard';
import { HomeWrapper, Intro } from './Home.style';

import IconLink from '@common/IconLink';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import { Card, CardIcon, CardText, CardTitle } from '@common/Card';

const ThingsILove = () => (
  <Flex justify="space-between" align="center">
    <Card>
      <CardIcon>
      <FontAwesomeIcon icon={['fab', 'aws']} />
      </CardIcon>
      <CardTitle>Public Cloud</CardTitle>
      <CardText>
     Leveraging AWS to architect and implement scalable, secure, and cost-efficient cloud infrastructures.
     Includes designing data lakes, optimizing Kubernetes clusters, and integrating advanced observability practices
     to enhance operational efficiency and resilience.
      </CardText>
    </Card>

    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={['fa', 'database']} />
      </CardIcon>
      <CardTitle>Data</CardTitle>
      <CardText>
        Designing and managing robust, scalable databases to ensure data integrity, security, and high performance.
        Includes implementing relational and non-relational databases, optimizing query performance, and ensuring reliable backups and disaster recovery solutions.
      </CardText>
    </Card>

    <Card>
      <CardIcon>
      <FontAwesomeIcon icon={['fac', 'llm-icon']} />
      </CardIcon>
      <CardTitle>LLM</CardTitle>
      <CardText>
       Leveraging Large Language Models (LLMs) to build intelligent, natural language processing applications.
       includes fine-tuning LLMs, developing custom models, and integrating them into various applications to enhance user interactions
       and automate complex language tasks.
      </CardText>
    </Card>
  </Flex>
);

const Home = () => {
  return (
    <HomeWrapper id="home">
      <img className="svg-rect" src={svgRect} alt=""></img>

      <Intro>
        {/* <Parallax y={[50, -50]} className="home__text"> */}
        <div className="home__text">
          <p>Hello, I’m</p>
          <h1>Elad Hirsch</h1>
          <p className="adjust">Dev | Software Architect | Developer Advocate</p>

          <div className="home__CTA">

            <div className="home__social">
              <IconLink
                label="github"
                icon={['fab', 'github']}
                href="//github.com/eladh"
              />
              <IconLink
                label="twitter"
                icon={['fab', 'twitter']}
                href="//twitter.com/elad_hirsch"
              />
              <IconLink
                label="twitter"
                icon={['fab', 'linkedin']}
                href="//www.linkedin.com/in/eladhirsch"
              />
              <IconLink
                label="codepen"
                icon={['fab', 'stack-overflow']}
                href="//stackoverflow.com/users/1807477/elad-hirsch"
              />
            </div>
          </div>
        </div>
        {/* </Parallax> */}
        <HeroCard />
      </Intro>

      {/* Things I LOVE */}
      <PageHeader style={{ marginBottom: 30 }}>
        Focus Area <i className="fas fa-heart" />
      </PageHeader>
      <ThingsILove />
    </HomeWrapper>
  );
};

export default Home;
