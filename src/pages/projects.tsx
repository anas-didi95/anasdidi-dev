import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import Box from "../components/Box"
import Separator from "../components/Separator"
import AppLayout from "../layouts/AppLayout"
import { oc } from "ts-optchain"
import { ProjectsQuery } from "../graphqlTypes"

const ProjectsPage: React.FC<{}> = () => {
  const data: ProjectsQuery = useStaticQuery(graphql`
    query Projects {
      allMarkdownRemark(
        sort: { fields: frontmatter___title, order: ASC }
        filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              link
              source
              tags
            }
            html
          }
        }
      }
    }
  `)

  return (
    <AppLayout title="Projects">
      <div className="columns">
        <div className="column is-6 is-offset-3">
          <Box>
            <div className="has-text-centered">
              <p className="title">Projects</p>
            </div>
            <div className="mt-5 has-text-centered">
              <Link to="https://github.com/anas-didi95">
                https://github.com/anas-didi95
              </Link>
            </div>
          </Box>
        </div>
      </div>
      <Separator />
      {oc(data)
        .allMarkdownRemark.edges([])
        .map((node, idx) => (
          <div
            key={`projects${idx}`}
            className="columns"
            style={{ justifyContent: "center" }}>
            <div className="column is-6">
              <Box>
                <p className="title is-4 is-spaced">
                  {oc(node).node.frontmatter.title("")}
                </p>
                <p className="subtitle is-6">
                  {oc(node).node.frontmatter.description("")}
                </p>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: oc(node).node.html("") }}
                />
                <hr />
                <div className="content">
                  <ul>
                    <li>Link: {oc(node).node.frontmatter.link("")}</li>
                    <li>Source: {oc(node).node.frontmatter.source("")}</li>
                    <li>Tags</li>
                  </ul>
                </div>
              </Box>
            </div>
          </div>
        ))}
    </AppLayout>
  )
}

export default ProjectsPage
