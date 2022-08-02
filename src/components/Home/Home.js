import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import svgRect from '@src/static/home_rect.svg';

import { HeroCard } from './HeroCard';
import { HomeWrapper, Intro } from './Home.style';

import IconLink from '@common/IconLink';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';
import Button from '@common/Button';

import { Card, CardIcon, CardText, CardTitle } from '@common/Card';

const ThingsILove = () => (
  <Flex justify="space-between" align="center">
    <Card>
      <CardIcon>
        <FontAwesomeIcon icon="chalkboard-teacher" />
      </CardIcon>
      <CardTitle>Training</CardTitle>
      <CardText>
        I'm more front end focused and love to work with Reactjs as well as pure
        HTML, CSS.
      </CardText>
    </Card>

    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={['fab', 'dev']} />
      </CardIcon>
      <CardTitle>Development</CardTitle>
      <CardText>
        I just extremely love javascript, I can’t even express how much I love
        javascript with just a few lines.
      </CardText>
    </Card>

    <Card>
      <CardIcon>
      <FontAwesomeIcon icon={['fab', 'aws']} />
      </CardIcon>
      <CardTitle>Consulting</CardTitle>
      <CardText>
        I love creative coding because I do both coding & designing. making
        beautiful art with code is very satisfying to me.
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
            <Button className="cta" as="a" href="#">
              Download Resume
            </Button>

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
        Services <i className="fas fa-heart" />
      </PageHeader>
      <ThingsILove />
    </HomeWrapper>
  );
};

export default Home;
