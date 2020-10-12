import React from "react"
import { Maybe } from "../graphqlTypes"
import * as Types from "../utils/types"
import Box from "./Box"

const ProjectList: React.FC<{ projectList: Types.Project[] }> = ({
  projectList,
}) => (
  <>
    {projectList.map((project, idx) => (
      <div key={`projects${idx}`} className="columns">
        <div className="column" />
        <div className="column is-7">
          <Box>
            <p className="title is-4 is-spaced">{project.title}</p>
            <p className="subtitle is-6">{project.description}</p>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: project.html }}
            />
            <hr />
            <ul>
              <li className="mb-3">
                <b>Link:</b>&nbsp;
                {!!project.link ? (
                  <a href={project.link}>{project.link}</a>
                ) : (
                  <span>Not available</span>
                )}
              </li>
              <li className="mb-3">
                <b>Source:</b>&nbsp;
                <a href={project.source}>{project.source}</a>
              </li>
              <li className="mb-3">
                <b>Tags:</b>&nbsp;
                <ProjectTagList tags={project.tags} />
              </li>
            </ul>
          </Box>
        </div>
        <div className="column" />
      </div>
    ))}
  </>
)

const ProjectTagList: React.FC<{ tags: Maybe<string>[] }> = ({ tags }) => (
  <span className="tags are-medium" style={{ display: "inline" }}>
    {tags.map(tag => (
      <span className="tag is-primary mr-1 ml-1">{tag}</span>
    ))}
  </span>
)

export default ProjectList
