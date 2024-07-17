import React from 'react';
import { graphql } from 'gatsby';

import SEO from '@components/seo';
import Layout from '@components/Layout/Layout';
import BlogLayout from '@components/Blog/BlogLayout';

import { BlogDateAndReadTime } from '@components/Blog/BlogCard';
import { DiscussionEmbed } from 'disqus-react';

import { siteUrl, disqusShortName } from '../../config/website';

const BlogPost = ({ data, pageContext }) => {
  
  const { title, date } = data.markdownRemark.frontmatter;
  const { timeToRead, html, excerpt, id } = data.markdownRemark;

  const baseSlugUrl = siteUrl + pageContext.slug;
  const disqusConfig = {
    identifier: id,
    title: title,
    url: baseSlugUrl,
  };

  return (
    <Layout>
      <SEO
        isBlogPost
        title={title}
        description={excerpt}
        slug={pageContext.slug}
      />

      <BlogLayout
        sharerSection={
          <div>
      
          </div>
        }
      >
        <BlogDateAndReadTime date={date} readtime={timeToRead} />
        <h1>{title}</h1>
        <article
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
      </BlogLayout>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      timeToRead
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY", locale: "en")
        title
      }
    }
  }
`;

export default BlogPost;
