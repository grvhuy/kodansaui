import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "../../../../../mdx-components";

export default async function RemoteMdxPage() {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const mdxContent = `# What can you do here?

  This is a great location for you to test how editing markdown feels. If you have an existing markdown source, you can switch to source mode using the toggle group in the top right, paste it in there, and go back to rich text mode.
  
  If you need a few ideas, here's what you can try:
  
  ![Bãi biển đẹp](https://cdn.kodansha.us/statics/news/_54e05234-0476-4cf5-8972-b7b336a1e144_1440.png)

  1. Add your own code sample
  2. Change the type of the headings
  3. Insert a table, add a few rows and columns
  4. Switch back to source markdown to see what you're going to get as an output
  5. Test the diff feature to see how the markdown has changed
  6. Add a frontmatter block through the toolbar button`;

  const components = useMDXComponents({});

  return (
    <div className="flex flex-col items-center mt-24 min-h-screen">
      <h1 className="self-start text-left text-3xl mb-6">{`TITASDASD`}</h1>
      <div className="w-1/2">
        <MDXRemote source={mdxContent} components={components} />
      </div>
    </div>
  );
}
