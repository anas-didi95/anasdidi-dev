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
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>Bulma</strong> by{" "}
              <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
              licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
              The website content is licensed{" "}
              <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                CC BY NC SA 4.0
              </a>
              .
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default AppLayout
