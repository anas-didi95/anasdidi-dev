import React, { ReactNode } from "react";
import { useReducerAction } from "./app-layout.action";
import { useQueryMetadata } from "../utils/hooks/use-query-metadata";
import { useRoutes } from "../utils/hooks/use-routes";
import { useQueryImage } from "../utils/hooks/use-query-image";

import Header from "../components/header";
import Footer from "../components/footer";

interface IAppLayout {
  children: ReactNode;
}
const AppLayout: React.FC<IAppLayout> = ({ children }) => {
  const { header } = useQueryImage();
  const { social } = useQueryMetadata();
  const routes = useRoutes();
  const [state, dispatch] = useReducerAction();

  const toggleMenu = () => dispatch({ type: "TOGGLE_MENU" });

  return (
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
  );
};

export default AppLayout;
