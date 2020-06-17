import React, { ReactNode } from "react"
import { GrMail, GrGithub, GrLinkedin } from "react-icons/gr"

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
          <SocialLink icon={<GrMail />} link={email} />
          <SocialLink icon={<GrGithub />} link={github} />
          <SocialLink icon={<GrLinkedin />} link={linkedin} />
        </div>
        <div className="column" />
      </div>
      <p>All rights reserved &copy; {new Date().getFullYear()}</p>
      <p>
        Built with <a href="https://bulma.io/">Bulma</a> and{" "}
        <a href="https://www.gatsbyjs.org/">GatsbyJS</a>{" "}
      </p>
    </div>
  </footer>
)

const SocialLink: React.FC<{ icon: ReactNode; link: string }> = ({
  icon,
  link,
}) => (
  <a className="button is-text" target="_blank" href={link}>
    <span className="is-size-3">{icon}</span>
  </a>
)

export default Footer
