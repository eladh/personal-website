import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

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
    </ProjectsWrapper>
  );
};

export default Projects;
