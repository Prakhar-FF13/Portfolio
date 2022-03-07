import path from "path";
import { prepareMDX, getAllSlugs, getAFile } from "./mdx";

/**
 * @param {String} pathFromRoot - folder path from root directory.
 * @param {String} fileName - filename without extension. extension is assumed to be .mdx
 * @returns an object with key props whose value is another object.
 *
 * This function is called from getStaticProps function of nextjs.
 * Takes in a folder path from root directory portfolio and a filename.
 * example - portfolio/abc/xyz is the folder we need.
 * So we pass abc/xyz and filename with extension of mdx.
 *
 */
export const staticProps = async (pathFromRoot, fileName) => {
  // prepareMDX from mdx.js
  const { code, frontmatter } = await prepareMDX(
    path.join(process.cwd(), pathFromRoot, fileName + ".mdx"), //filename
    path.join(process.cwd(), pathFromRoot) // directory of file
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
