import React from "react"
import AppLayout from "../layouts/AppLayout"

const IndexPage: React.FC = () => (
  <AppLayout title="Sample Page">
    <section className="hero is-primary">
      <div className="hero-body">
        <p className="title">
          Hero title
    </p>
        <p className="subtitle">
          Hero subtitle
    </p>
        <p>Hello world</p>
      </div>
    </section>
    <p>Hello</p>
  </AppLayout>
)

export default IndexPage
