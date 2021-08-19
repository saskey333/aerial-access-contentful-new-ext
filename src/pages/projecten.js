import * as React from 'react';
import { graphql } from 'gatsby';
import LayoutProjecten from '../components/layout-projecten';

const ProjectPage = (props) => {
  const {
    data: {
      allContentfulProject: { edges: projects },
    },
  } = props;

  return <LayoutProjecten {...{ projects: projects || [] }} />;
};

export default ProjectPage;

export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulProject(limit: 1000) {
      edges {
        node {
          id
          title
          shortDescription {
            content: shortDescription
          }
          longDescription {
            content: longDescription
          }
          activities
          image {
            file {
              url
            }
          }
          images {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
