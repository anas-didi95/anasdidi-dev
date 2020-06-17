import React from "react"
import AppLayout from "../layouts/AppLayout"

const IndexPage: React.FC<{}> = () => {
  return (
    <AppLayout description="Home page" title="Home">
      <div className="columns">
        <div className="column" />
        <div className="column is-6">
          <div className="box px-6 py-5">
            <p className="title is-4 mb-3">
              Introduction to Algorithm: Insertion Sort
            </p>
            <div className="mb-5">
              <div className="columns is-mobile">
                <div className="column">
                  <p className="subtitle is-6 is-italic">Anas Juwaidi</p>
                </div>
                <div className="column" />
                <div className="column">
                  <p className="has-text-right subtitle is-6 is-italic">
                    June 17, 2020
                  </p>
                </div>
              </div>
            </div>
            <p className="mb-5">
              Introduction to Insertion Sort, analysis and implementation on
              various programming languages.
            </p>
            <br />
            <div className="tags are-medium">
              <span className="tag is-primary mr-2">Black</span>
            </div>
          </div>
          <div className="box px-6 py-5">
            <p className="title is-4 mb-3">Hello World</p>
            <div className="mb-5">
              <div className="columns is-mobile">
                <div className="column">
                  <p className="subtitle is-6 is-italic">Anas Juwaidi</p>
                </div>
                <div className="column" />
                <div className="column">
                  <p className="has-text-right subtitle is-6 is-italic">
                    June 17, 2020
                  </p>
                </div>
              </div>
            </div>
            <p className="mb-5">Sample page to display Markdown rendering.</p>
            <br />
            <div className="tags are-medium">
              <span className="tag is-primary mr-2">Black</span>
            </div>
          </div>
        </div>
        <div className="column" />
      </div>
    </AppLayout>
  )
}

export default IndexPage
