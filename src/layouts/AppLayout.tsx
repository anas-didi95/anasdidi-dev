import React, { useState, ReactNode } from "react"
import Header from "../components/Header"
import { useQueryMetadata } from "../utils/hooks/useQueryMetadata"
import SEO from "../components/SEO"
import Footer from "../components/Footer"

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}>
        <Header
          isActive={isActive}
          toggleMenu={handler.toggleMenu}
          headerImage={metadata.headerImage}
        />
        <section className="section" style={{ flex: 1 }}>
          <div className="container">{children}</div>
        </section>
        <Footer
          email={metadata.social.email}
          github={metadata.social.github}
          linkedin={metadata.social.linkedin}
        />
      </div>
    </>
  )
}

export default AppLayout
