const axios = require('axios');
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        src: path.join(__dirname, 'src'),
        '@src': path.join(__dirname, 'src'),
        '@common': path.join(__dirname, 'src/components/common'),
        '@components': path.join(__dirname, 'src/components'),
        '@pages': path.join(__dirname, 'src/pages'),
      },
    },
  });
};

const slugify = require('./src/components/slugify.js');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type !== 'MarkdownRemark') return;

  const fileNode = getNode(node.parent);
  const slugFromTitle = slugify(node.frontmatter.title);

  // sourceInstanceName defined if its a blog or case-studie
  const sourceInstanceName = fileNode.sourceInstanceName;

  // extract the name of the file because we need to sort by it's name
  // `001-blahblah`
  const fileIndex = fileNode.name.substr(2, 1);

  // create slug nodes
  createNodeField({
    node,
    name: 'slug',
    // value will be {blog||case-studies}/my-title
    value: '/' + sourceInstanceName + '/' + slugFromTitle,
  });

  // adds a posttype field to extinguish between blog and case-study
  createNodeField({
    node,
    name: 'posttype',
    // value will be {blog||case-studies}
    value: sourceInstanceName,
  });

  // if sourceInstanceName is case-studies then add the fileIndex field because we need
  // this to sort the Projects with their respective file name `001-blahblah`
  if (sourceInstanceName == 'case-studies') {
    createNodeField({
      node,
      name: 'fileIndex',
      value: fileIndex,
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const caseStudyTemplate = path.resolve('src/templates/case-study.js');
  const blogPostTemplate = path.resolve('src/templates/blog-post.js');
  const tagTemplate = path.resolve('src/templates/tags.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
            }
            fields {
              slug
              posttype
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors);

    const edges = res.data.allMarkdownRemark.edges;

    edges.forEach(({ node }) => {
      // if the posttype is case-studies then createPage with caseStudyTemplate
      // we get fileds.posttype because we created this node with onCreateNode
      if (node.fields.posttype === 'case-studies') {
        createPage({
          path: node.fields.slug,
          component: caseStudyTemplate,
          context: {
            slug: node.fields.slug,
          },
        });
      } else {
        const tagSet = new Set();
        // for each tags on the frontmatter add them to the set
        node.frontmatter.tags.forEach(tag => tagSet.add(tag));

        const tagList = Array.from(tagSet);
        // for each tags create a page with the specific `tag slug` (/blog/tags/:name)
        // pass the tag through the PageContext
        tagList.forEach(tag => {
          createPage({
            path: `/blog/tags/${slugify(tag)}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          });
        });

        // create each individual blog post with `blogPostTemplate`
        createPage({
          path: node.fields.slug,
          component: blogPostTemplate,
          context: {
            slug: node.fields.slug,
          },
        });
      }
    });
  });
};