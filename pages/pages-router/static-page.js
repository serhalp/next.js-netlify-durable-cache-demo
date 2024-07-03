const StaticPage = ({ id }) => {
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

StaticPage.subtitle = "static page";

export default StaticPage;

export const getStaticProps = async () => {
  return {
    props: { id: new Date().getMilliseconds() },
  };
};
