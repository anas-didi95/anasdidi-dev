import React, { ReactNode, Reducer, useReducer } from "react"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useQueryMetadata } from "../utils/hooks/useQueryMetadata"

interface IAppLayout {
  children: ReactNode
  description?: string
  title: string
}
const AppLayout: React.FC<IAppLayout> = ({ children, description, title }) => {
  const metadata = useQueryMetadata()
  const [state, dispatch] = useReducer<Reducer<TState, TAction>>(reducer, {
    isActive: false,
  })

  const toggleMenu = () => dispatch({ type: "TOGGLE_MENU" })

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
        <a className="skip-link" href="#mainContent">
          Skip to main
        </a>
        <Header
          isActive={state.isActive}
          toggleMenu={toggleMenu}
          headerImage={metadata.headerImage}
        />
        <main id="#mainContent" style={{ flex: 1 }}>
          <section className="section">
            <div className="container">{children}</div>
          </section>
        </main>
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

type TState = {
  isActive: boolean
}
type TAction = { type: "TOGGLE_MENU" } | { type: "TOGGLE_MENU" }
const reducer: Reducer<TState, TAction> = (state: TState, action: TAction) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      const { isActive } = state
      return { ...state, isActive: !isActive }
    default:
      throw new Error(`Action Type not defined! ${action.type}`)
  }
}
