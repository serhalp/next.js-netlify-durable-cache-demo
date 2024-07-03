import { metadata as parentMetadata } from "../layout";

export const metadata = {
  title: `${parentMetadata.title} - dynamic page`,
};

// Avoid next.js heuristics to be 100% sure we're testing what we think we are
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default () => {
  const id = new Date().getMilliseconds();
  return (
    <>
      <p className="description">
        This is a dynamic page. It is rendered on demand by a Netlify function
        via SSR and it is not cacheable.
      </p>
      <code>{id}</code>
    </>
  );
};
