const IsrPage = ({ id }) => {
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

IsrPage.subtitle = "ISR page";

export default IsrPage;

export const getStaticProps = async () => {
  return {
    props: { id: new Date().getMilliseconds() },
    // https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration
    revalidate: 15,
  };
};
