import React, { useMemo } from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { animateScroll } from "react-scroll";
import { useReducerAction } from "../actions/index.action";
import { TArticle } from "../utils/types";

import AppLayout from "../layouts/app-layout";
import ArticleList from "../components/article-list";
import SEO from "../components/seo";

const ArticlesPage: React.FC<PageProps<Queries.ArticlesQuery>> = ({ data }) => {
  const [state, dispatch] = useReducerAction(data.articles.edges.length, 6);
  const handleNextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
    animateScroll.scrollToTop({ duration: 750 });
  };
  const handlePreviousPage = () => {
    dispatch({ type: "PREVIOUS_PAGE" });
    animateScroll.scrollToTop({ duration: 750 });
  };

  const articles: TArticle[] = useMemo(
    () =>
      data.articles.edges
        .map(edge => ({
          author: edge.node.frontmatter?.author ?? "",
          date: edge.node.frontmatter?.date ?? "",
          description: edge.node.frontmatter?.description ?? "",
          excerpt: edge.node.excerpt ?? "",
          slug: edge.node.fields?.slug ?? "",
          tags: edge.node.frontmatter?.tags ?? [],
          title: edge.node.frontmatter?.title ?? "",
        }))
        .slice(
          (state.currentPage - 1) * state.articlesPerPage,
          (state.currentPage - 1) * state.articlesPerPage +
            state.articlesPerPage
        ),
    [data.articles.edges, state.articlesPerPage, state.currentPage]
  );

  return (
    <AppLayout>
      <div className="columns is-centered">
        <div className="column is-10">
          <ArticleList
            articles={articles}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            hasNextPage={state.hasNextPage}
            hasPreviousPage={state.hasPreviousPage}
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default ArticlesPage;

export const Head: HeadFC = () => <SEO siteTitle="Articles" />;

export const PageQuery = graphql`
  query Articles {
    articles: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/articles/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            author
            date(formatString: "YYYY, MMMM DD")
            tags
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
