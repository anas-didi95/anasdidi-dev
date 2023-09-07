import { useStaticQuery, graphql } from "gatsby";

export type IQueryMetadata = {
  title: string;
  description: string;
  author: string;
  fullname: string;
  position: string;
  social: {
    email: string;
    github: string;
    linkedin: string;
    web: string;
  };
};
export const useQueryMetadata = (): IQueryMetadata => {
  const data: Queries.MetadataQuery = useStaticQuery(graphql`
    query Metadata {
      site {
        siteMetadata {
          title
          description
          author
          fullname
          position
          social {
            email
            github
            linkedin
            web
          }
        }
      }
    }
  `);

  return {
    author: data.site?.siteMetadata?.author ?? "",
    description: data.site?.siteMetadata?.description ?? "",
    fullname: data.site?.siteMetadata?.fullname ?? "",
    position: data.site?.siteMetadata?.position ?? "",
    title: data.site?.siteMetadata?.title ?? "",
    social: {
      email: data.site?.siteMetadata?.social?.email ?? "",
      github: data.site?.siteMetadata?.social?.github ?? "",
      linkedin: data.site?.siteMetadata?.social?.linkedin ?? "",
      web: data.site?.siteMetadata?.social?.web ?? "",
    },
  };
};
