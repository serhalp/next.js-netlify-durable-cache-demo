import { metadata as parentMetadata } from "../../layout";

export const metadata = {
  title: `${parentMetadata.title} - dynamic cacheable page`,
};

// Avoid next.js heuristics to be 100% sure we're testing what we think we are
export const dynamicParams = true;

// This is seemingly the only way to render a page dynamically and have the full response be cached.
// See https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#replacing-fallback.
export async function generateStaticParams() {
  return [];
}

export default () => {
  const id = new Date().getMilliseconds();
  return (
    <>
      <p className="description">
        This is a dynamic cacheable page. It is rendered on demand by a Netlify
        function via SSR and it is cacheable on the CDN for 15 seconds.
      </p>
      <code>{id}</code>
    </>
  );
};
