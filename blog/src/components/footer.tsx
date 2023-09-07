import React, { ReactNode } from "react"
import Icon from "./icon"

interface IFooter {
  email: string
  github: string
  linkedin: string
}
const Footer: React.FC<IFooter> = ({ email, github, linkedin }) => (
  <footer className="footer">
    <div className="content has-text-centered">
      <div className="columns">
        <div className="column" />
        <div className="buttons column">
          <SocialLink
            icon={<Icon type="email" />}
            link={`mailto:${email}`}
            ariaLabel="Email"
          />
          <SocialLink
            icon={<Icon type="github" />}
            link={github}
            ariaLabel="Github"
          />
          <SocialLink
            icon={<Icon type="linkedin" />}
            link={linkedin}
            ariaLabel="LinkedIn"
          />
        </div>
        <div className="column" />
      </div>
      <p>All rights reserved &copy; {new Date().getFullYear()}</p>
      <p>
        Built with <ToolLink link="https://bulma.io" label="Bulma" /> and{" "}
        <ToolLink link="https://www.gatsbyjs.org" label="Gatsby" />
      </p>
    </div>
  </footer>
)

const SocialLink: React.FC<{
  icon: ReactNode
  link: string
  ariaLabel: string
}> = ({ icon, link, ariaLabel }) => (
  <a
    className="button is-text"
    target="_blank"
    href={link}
    rel="noreferrer"
    aria-label={ariaLabel}>
    <span className="is-size-3">{icon}</span>
  </a>
)

const ToolLink: React.FC<{ link: string; label: string }> = ({
  link,
  label,
}) => (
  <a className="has-text-black has-text-weight-bold" href={link}>
    {label}
  </a>
)

export default Footer
