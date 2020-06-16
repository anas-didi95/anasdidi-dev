import React, { useState, ReactNode } from "react"
import Header from "../components/Header"
import { useQueryMetadata } from "../utils/hooks/useQueryMetadata"
import Helmet from "react-helmet"
import SEO from "../components/SEO"

const AppLayout: React.FC<{ children: ReactNode; description: string }> = ({
  children,
  description,
}) => {
  const [isActive, setActive] = useState(false)
  const metadata = useQueryMetadata()

  const handler = {
    toggleMenu: () => setActive(prev => !prev),
  }

  return (
    <>
      <SEO
        title={metadata.title}
        author={metadata.author}
        description={description || metadata.description}
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
