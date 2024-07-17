import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Flex from '@src/components/common/Flex';


import PageHeader from '@common/PageHeader';
import IFrame from '@common/IFrame';

import ProjectTemplate from './ProjectTemplate';
import { ProjectPreview } from './ProjectTemplate.style';

const ProjectsWrapper = styled.section`
  ${props => props.theme.spacing.sectionBottom};
`;
const Projects = () => {
  const projects = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fields: { posttype: { eq: "case-studies" } } }
          sort: { fields: fields___fileIndex, order: ASC }
        ) {
          edges {
            node {
              id
              frontmatter {
                excerpt
                iframe
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  return (
    <ProjectsWrapper id="evangelism" style={{ marginBottom: 100 }}>
      <PageHeader>Evangelism</PageHeader>

      {projects.allMarkdownRemark.edges.map(({ node }) => (
        <ProjectTemplate
          key={node.id}
          title={node.frontmatter.title}
          desc={node.frontmatter.excerpt}
          preview={
            <ProjectPreview>
              <IFrame
                livedemo={!!node.frontmatter.iframe.match('codepen')}
                src={node.frontmatter.iframe}
              />
            </ProjectPreview>
          }
        />
      ))}

      <PageHeader>Past Events</PageHeader>


        {/* <SkillPie percent={90} name={"JavaScript"} /> */}
      <Flex className="skill__icons" justify="space-around" align="center">
      <img width="150px" src="https://pbs.twimg.com/profile_images/930327363413475328/--REVEmo_400x400.jpg " alt="Elad Hirsch" />
      <img width="150px" src="https://techstrong.tv/wp-content/uploads/2022/12/Yalla_2022_general.png 
 " alt="Elad Hirsch" />
      <img width="150px" src="https://images.credly.com/images/e6da3850-0891-43de-b90b-4339c2fce4b0/image.png 
" alt="Elad Hirsch" />
      <img width="150px" src="https://sessionize.com/image/696d-1140o400o3-eb-e8d9-4628-a147-e9878198c900.fb671ea6-e1eb-4017-929a-451def936fe9.png 
" alt="Elad Hirsch" />
      <img width="150px" src="https://media.licdn.com/dms/image/sync/D4D27AQFt4_1naDF46Q/articleshare-shrink_800/0/1711460474170?e=2147483647&v=beta&t=-0_zQScj1YmwNXY39L80P32YmZyNJhRPBsPG45HQaGM 
" alt="Elad Hirsch" />
      <img width="150px" src="https://media.licdn.com/dms/image/sync/C4D27AQEm36JURfSeTg/articleshare-shrink_800/0/1717502182540?e=2147483647&v=beta&t=Qj2-C5hLbOx4RIqrurzO4OSxdnZEST3sNOwBKOm_DvI 
" alt="Elad Hirsch" />
      <img width="250px" src="https://www.pngkey.com/png/full/850-8506626_javascript-israel-printing.png" alt="Elad Hirsch" />
      <img width="250px" src="https://d1.awsstatic.com/2023_Summits_Logo_Tel%20Aviv.78dfff3762c1353313fe9c5e3261cf3b4975965e.png 
" alt="Elad Hirsch" />
      </Flex>
      
    </ProjectsWrapper>
  );
};

export default Projects;
