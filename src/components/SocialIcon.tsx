import React from "react"
import { GrMail, GrGithub, GrLinkedin, GrGlobe } from "react-icons/gr"

const SocialIcon: React.FC<{
  type: "email" | "github" | "linkedin" | "web"
}> = ({ type }) => (
  <>
    {
      {
        email: <GrMail />,
        github: <GrGithub />,
        linkedin: <GrLinkedin />,
        web: <GrGlobe />,
        default: <span />,
      }[type]
    }{" "}
  </>
)

export default SocialIcon