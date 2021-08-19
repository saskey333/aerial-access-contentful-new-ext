exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const path = require(`path`);
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulProduct {
          edges {
            node {
              id
              slug
              name
              introTitle
              description2title
              description1title
              category {
                name
                slug
              }
              introDescription {
                childMarkdownRemark {
                  html
                }
              }
              image {
                file {
                  url
                }
              }
              images {
                id
                file {
                  url
                }
              }
              description1 {
                childMarkdownRemark {
                  html
                }
              }
              description2 {
                childMarkdownRemark {
                  html
                }
              }
              specs
              pdfAll {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `).then((result) => {
      result.data.allContentfulProduct.edges.forEach(({ node }) => {
        createPage({
          path: `systems/producten/${node.slug}`,
          component: path.resolve(`./src/pages/systems/producten/product.js`),
          context: {
            slug: node.slug,
            product: node,
          },
        });
      });
      resolve();
    });
  }).catch((error) => {
    console.log(error);
    reject();
  });
};
