import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import Box from "../components/Box"
import Separator from "../components/Separator"
import AppLayout from "../layouts/AppLayout"
import { oc } from "ts-optchain"
import { ProjectsQuery } from "../graphqlTypes"
import * as Types from "../utils/types"
import ProjectList from "../components/ProjectList"

const ProjectsPage: React.FC<{}> = () => {
  const data: ProjectsQuery = useStaticQuery(graphql`
    query Projects {
      projectList: allMarkdownRemark(
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

  const projectList: Types.Project[] = oc(data)
    .projectList.edges([])
    .map(edge => ({
      title: oc(edge).node.frontmatter.title(""),
      description: oc(edge).node.frontmatter.description(""),
      html: oc(edge).node.html(""),
      link: oc(edge).node.frontmatter.link(""),
      source: oc(edge).node.frontmatter.source(""),
      tags: oc(edge).node.frontmatter.tags([]),
    }))

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
      <ProjectList projectList={projectList} />
    </AppLayout>
  )
}

export default ProjectsPage
