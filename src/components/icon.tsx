import React from "react";
import { GrMail, GrGithub, GrLinkedin, GrGlobe } from "react-icons/gr";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { TPaginationEnum, TSocialEnum } from "../utils/types";

interface IIcon {
  type: TSocialEnum | TPaginationEnum;
}
const Icon: React.FC<IIcon> = ({ type }) => (
  <>
    {
      {
        email: <GrMail />,
        github: <GrGithub />,
        linkedin: <GrLinkedin />,
        web: <GrGlobe />,
        next: <IoArrowForwardOutline />,
        previous: <IoArrowBackOutline />,
        default: <span />,
      }[type]
    }{" "}
  </>
);

export default Icon;
