import { metadata as parentMetadata } from "../layout";

export const metadata = {
  title: `${parentMetadata.title} - dynamic cacheable page`,
};

// Avoid next.js heuristics to be 100% sure we're testing what we think we are
export const dynamic = "force-static";
export const revalidate = 15;

export default () => {
  const id = new Date().getMilliseconds();
  return (
    <>
      <p className="description">
        This is a static page that uses Incremental Static Regeneration (ISR).
        It is rendered initially at build time, then it is re-rendered - in the
        background - by a Netlify function via SSR, if the served page is older
        than 15 seconds.
      </p>
      <code>{id}</code>
    </>
  );
};
