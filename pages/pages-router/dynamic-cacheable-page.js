const DynamicCacheablePage = ({ id }) => {
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

DynamicCacheablePage.subtitle = "dynamic cacheable page";

export default DynamicCacheablePage;

export const getServerSideProps = async ({ res }) => {
  // https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props#caching-with-server-side-rendering-ssr
  res.setHeader("Cache-Control", "public, s-maxage=15, must-revalidate");
  return {
    props: { id: new Date().getMilliseconds() },
  };
};
