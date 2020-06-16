import React, { useState, ReactNode } from "react"
import Header from "../components/Header"
import { useQueryMetadata } from "../utils/hooks/useQueryMetadata"
import SEO from "../components/SEO"

const AppLayout: React.FC<{
  children: ReactNode
  description: string
  title: string
}> = ({ children, description, title }) => {
  const [isActive, setActive] = useState(false)
  const metadata = useQueryMetadata()

  const handler = {
    toggleMenu: () => setActive(prev => !prev),
  }

  return (
    <>
      <SEO
        title={title}
        author={metadata.author}
        description={description || metadata.description}
        siteTitle={metadata.title}
      />
      <Header
        isActive={isActive}
        toggleMenu={handler.toggleMenu}
        headerImage={metadata.headerImage}
      />
      {children}
    </>
  )
}

export default AppLayout
