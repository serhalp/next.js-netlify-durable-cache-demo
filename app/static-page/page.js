import { metadata as parentMetadata } from "../layout";

export const metadata = {
  title: `${parentMetadata.title} - static page`,
};

// Avoid next.js heuristics to be 100% sure we're testing what we think we are
export const dynamic = "force-static";

export default () => {
  const id = new Date().getMilliseconds();
  return (
    <>
      <p className="description">
        This is a static page. It is rendered once at build time and it is
        immutably cached.
      </p>
      <code>{id}</code>
    </>
  );
};
