import React from "react"
import { GrMail, GrGithub, GrLinkedin, GrGlobe } from "react-icons/gr"
import { TSocialEnum } from "../utils/types"

interface IIcon {
  type: TSocialEnum
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
