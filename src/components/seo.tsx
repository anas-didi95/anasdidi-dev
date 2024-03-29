import React, { ReactNode } from "react";
import { useQueryMetadata } from "../utils/hooks/use-query-metadata";

interface ISEO {
  siteTitle: string;
  siteDescription?: string;
  children?: ReactNode;
}
const SEO: React.FC<ISEO> = ({ siteTitle, siteDescription, children }) => {
  const { author, description, title } = useQueryMetadata();

  return (
    <>
      <title>{!!siteTitle ? `${siteTitle} | ${title}` : title}</title>
      <meta
        name="description"
        content={!!siteDescription ? siteDescription : description}
      />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {children}
    </>
  );
};

export default SEO;
