import path from "path";
import { prepareMDX, getAllSlugs, getAFile } from "./mdx";

/**
 * @param {String} pathFromRoot - folder path from root directory.
 * @param {String} fileName - filename without extension.
 * @returns an object with key props whose value is another object.
 *
 * This function is called from getStaticProps function of nextjs.
 * Takes in a folder path from root directory portfolio and a filename.
 * example - portfolio/abc/xyz is the folder we need.
 * So we pass abc/xyz and filename without extension of mdx.
 *
 */
export const staticProps = async (pathFromRoot, fileName) => {
  // read file.
  const file = getAFile(path.join(process.cwd(), pathFromRoot, fileName));

  // prepareMDX from mdx.js
  const { code, frontmatter } = await prepareMDX(
    file,
    path.join(process.cwd(), "blogs/python")
  );

  // return in format required by getStaticProps.
  return {
    props: {
      code,
      frontmatter,
    },
  };
};

/**
 *
 * @param {String} folder - folder location from root.
 * @returns all filenames
 */
export const staticPaths = async (folder) => {
  // slugs will be used as dynamic routes - filenames are used.
  const slugs = getAllSlugs(path.join(process.cwd(), folder));

  // return in format required by getStaticPaths.
  return {
    paths: slugs,
    fallback: false,
  };
};
