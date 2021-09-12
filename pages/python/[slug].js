import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { staticProps, staticPaths } from "../../utils/staticPropsandPath";

export default function Python({ code, frontmatter }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return <Component />;
}

// dynamically generate static pages.
export const getStaticProps = async ({ params }) => {
  // params contain what is passed by getStaticPaths
  return await staticProps("blogs/python", params.slug);
};

// dynamic routes depending on slug.
export const getStaticPaths = async () => {
  return await staticPaths("blogs/python");
};
