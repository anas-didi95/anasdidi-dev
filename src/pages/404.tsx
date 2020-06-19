import React from "react"
import AppLayout from "../layouts/AppLayout"

const Error404Page: React.FC<{}> = () => {
  return (
    <AppLayout title="Error 404">
      <div>
        Page Not Found Looks like you've followed a broken link or entered a URL
        that doesn't exist on this site.
      </div>
    </AppLayout>
  )
}

export default Error404Page
