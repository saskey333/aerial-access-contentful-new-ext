import * as React from 'react';
import { graphql } from 'gatsby';
import LayoutSystemsProducten from '../../../components/layout-producten';

const ProductenPage = (props) => {
  const {
    data: {
      allContentfulProductCategory: { edges: categories },
    },
  } = props;

  return <LayoutSystemsProducten {...{ categories }} />;
};

export const query = graphql`
  query ProductCategoriesQuery {
    allContentfulProductCategory(sort: { order: ASC, fields: order }) {
      edges {
        node {
          id
          name
          slug
          description {
            internal {
              content
            }
          }
          image {
            file {
              url
            }
          }
          product {
            id
            image {
              file {
                url
              }
            }
            name
            slug
          }
        }
      }
    }
  }
`;

export default ProductenPage;
