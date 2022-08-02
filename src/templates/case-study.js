import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@components/Layout/Layout';
import SEO from '@components/seo';

import Flex from '@common/Flex';


import { CaseStudyWrapper } from './case-study.style';

const CaseStudy = ({ data }) => {
 
  const study = data.markdownRemark.frontmatter;


  return (
    <Layout>
      <SEO slug={data.markdownRemark.fields.slug} title={study.title} />
      <CaseStudyWrapper>
        <Flex className="case__title" justify="space-between" align="center">
          <h1>{study.title}</h1>
        </Flex>
      </CaseStudyWrapper>
    </Layout>
  );
};

export const query = graphql`
  query caseStudyBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        iframe
        title
      }
    }
  }
`;

export default CaseStudy;
