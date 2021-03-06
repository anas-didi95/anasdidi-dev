import React, { ReactNode } from "react"
import { useReducerAction } from "./AppLayout.action"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useQueryMetadata } from "../utils/hooks/useQueryMetadata"
import { useRoutes } from "../utils/hooks/useRoutes"
import { useQueryImage } from "../utils/hooks/useQueryImage"

interface IAppLayout {
  children: ReactNode
  description?: string
  title: string
}
const AppLayout: React.FC<IAppLayout> = ({ children, description, title }) => {
  const { header } = useQueryImage()
  const {
    author,
    description: siteDescription,
    title: siteTitle,
    social,
  } = useQueryMetadata()
  const routes = useRoutes()
  const [state, dispatch] = useReducerAction()

  const toggleMenu = () => dispatch({ type: "TOGGLE_MENU" })

  return (
    <>
      <SEO
        title={title}
        author={author}
        description={description || siteDescription}
        siteTitle={siteTitle}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}>
        <a className="skip-link" href="#mainContent">
          Skip to main
        </a>
        <Header
          isActive={state.isActive}
          toggleMenu={toggleMenu}
          headerImage={header}
          routes={routes}
        />
        <main id="#mainContent" style={{ flex: 1 }}>
          <section className="section">
            <div className="container">{children}</div>
          </section>
        </main>
        <Footer
          email={social.email}
          github={social.github}
          linkedin={social.linkedin}
        />
      </div>
    </>
  )
}

export default AppLayout
