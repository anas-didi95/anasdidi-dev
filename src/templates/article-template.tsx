import React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import { TArticleNode } from "../utils/types";

import AppLayout from "../layouts/app-layout";
import Box from "../components/box";
import Tag from "../components/tag";
import Icon from "../components/icon";
import SEO from "../components/seo";

const ArticleTemplate: React.FC<
  PageProps<
    Queries.ArticleTemplateQuery,
    { next: TArticleNode; previous: TArticleNode }
  >
> = ({ data, pageContext }) => (
  <AppLayout>
    <div className="columns is-centered">
      <div className="column is-8">
        <Box>
          <div className="has-text-centered">
            <p className="title is-3">
              {data.markdownRemark?.frontmatter?.title ?? ""}
            </p>
            <p className="subtitle is-6">
              <span className="is-italic">
                {data.markdownRemark?.frontmatter?.date ?? ""}
              </span>
            </p>
            <div
              className="tags are-medium"
              style={{ justifyContent: "center" }}>
              {!!data.markdownRemark?.frontmatter?.tags &&
                data.markdownRemark.frontmatter.tags.map((tag, i) => (
                  <Tag key={`tag${i}`} value={tag ?? ""} isHighlighted />
                ))}
            </div>
          </div>
        </Box>
      </div>
    </div>
    <div className="columns is-centered mt-2 mb-6">
      <div className="column is-7">
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark?.html ?? "",
          }}
        />
      </div>
    </div>
    <Pagination next={pageContext.next} previous={pageContext.previous} />
  </AppLayout>
);

const Pagination: React.FC<{
  next?: TArticleNode;
  previous?: TArticleNode;
}> = ({ next, previous }) => (
  <div className="columns is-centered">
    <div className="column is-7">
      {next && (
        <div className="has-text-right">
          <Link
            className="has-text-info has-text-weight-bold"
            to={next.fields.slug}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}>
              <span className="mr-2">{next.frontmatter.title}</span>
              <Icon type="next" />
            </div>
          </Link>
        </div>
      )}
      <br />
      {previous && (
        <div className="has-text-left">
          <Link
            className="has-text-info has-text-weight-bold"
            to={previous.fields.slug}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Icon type="previous" />
              <span className="ml-2">{previous.frontmatter.title}</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  </div>
);

export default ArticleTemplate;

export const Head: HeadFC<Queries.ArticleTemplateQuery> = ({ data }) => (
  <SEO
    siteTitle={data.markdownRemark?.frontmatter?.title ?? ""}
    siteDescription={data.markdownRemark?.frontmatter?.description ?? ""}
  />
);

export const PageQuery = graphql`
  query ArticleTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        tags
        author
        date(formatString: "YYYY, MMMM DD")
      }
      html
    }
  }
`;
