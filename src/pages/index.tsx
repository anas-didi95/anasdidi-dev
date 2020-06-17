import React from "react"
import AppLayout from "../layouts/AppLayout"

const IndexPage: React.FC<{}> = () => {
  return (
    <AppLayout description="Home page" title="Home">
      <div>Hello world</div>
      <br />
    </AppLayout>
  )
}

export default IndexPage
