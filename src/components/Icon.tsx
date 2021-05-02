import React from "react"
import { GrMail, GrGithub, GrLinkedin, GrGlobe } from "react-icons/gr"

interface IIcon {
  type: "email" | "github" | "linkedin" | "web"
}
const Icon: React.FC<IIcon> = ({ type }) => (
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

export default Icon
