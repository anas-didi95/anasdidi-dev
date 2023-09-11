import React from "react";
import { HeadFC } from "gatsby";
import { useQueryTags } from "../utils/hooks/use-query-tags";

import AppLayout from "../layouts/app-layout";
import SEO from "../components/seo";
import TagList from "../components/tag-list";

const TagsPage: React.FC<{}> = () => {
  const tags = useQueryTags();

  return (
    <AppLayout>
      <div className="columns is-centered">
        <div className="column is-6">
          <TagList tags={tags} />
        </div>
      </div>
    </AppLayout>
  );
};

export default TagsPage;

export const Head: HeadFC = () => <SEO siteTitle="Tags" />;
