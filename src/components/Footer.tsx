import React, { ReactNode } from "react"
import Icon from "./Icon"

const Footer: React.FC<{ email: string; github: string; linkedin: string }> = ({
  email,
  github,
  linkedin,
}) => (
    <footer className="footer">
      <div className="content has-text-centered">
        <div className="columns">
          <div className="column" />
          <div className="buttons column">
            <SocialLink icon={<Icon type="email" />} link={`mailto:${email}`} />
            <SocialLink icon={<Icon type="github" />} link={github} />
            <SocialLink icon={<Icon type="linkedin" />} link={linkedin} />
          </div>
          <div className="column" />
        </div>
        <p>All rights reserved &copy; {new Date().getFullYear()}</p>
        <p>
          Built with <a className="has-text-primary has-text-weight-bold" href="https://bulma.io/">Bulma</a> and{" "}
          <a className="has-text-primary has-text-weight-bold" href="https://www.gatsbyjs.org/">Gatsby</a>{" "}
        </p>
      </div>
    </footer>
  )

const SocialLink: React.FC<{ icon: ReactNode; link: string }> = ({
  icon,
  link,
}) => (
    <a className="button is-text" target="_blank" href={link} rel="noreferrer">
      <span className="is-size-3">{icon}</span>
    </a>
  )

export default Footer
