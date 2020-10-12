import { Link } from "gatsby"
import React from "react"
import Box from "../components/Box"
import Icon from "../components/Icon"
import Separator from "../components/Separator"
import AppLayout from "../layouts/AppLayout"

const ProjectsPage: React.FC<{}> = () => (
  <AppLayout title="Projects">
    <div className="columns">
      <div className="column is-6 is-offset-3">
        <Box>
          <div className="has-text-centered">
            <p className="title">Projects</p>
          </div>
          <div className="mt-5 has-text-centered"><Link to="https://github.com/anas-didi95">https://github.com/anas-didi95</Link>
          </div>
        </Box>
      </div>
    </div>
    <Separator />
    <div className="columns">
      <div className="column is-5 is-offset-1" >
        <Box>
          <p className="title is-4">Title</p>
          <div className="content">
            Hello world
          </div>
          <hr />
          <div className="content">
            <ul>
              <li>Link</li>
              <li>Source</li>
              <li>Tags</li>
            </ul>
          </div>
        </Box>
      </div>
      <div className="column is-5"><Box><h1>Test</h1></Box></div>
    </div>
  </AppLayout>
)

export default ProjectsPage
