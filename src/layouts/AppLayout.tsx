import React, { useState, ReactNode } from "react"
import Header from "../components/Header"
import { useQueryMetadata } from "../utils/hooks/useQueryMetadata"
import Helmet from "react-helmet"

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isActive, setActive] = useState(false)
  const metadata = useQueryMetadata()

  const handler = {
    toggleMenu: () => setActive(prev => !prev),
  }

  return (
    <>
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
