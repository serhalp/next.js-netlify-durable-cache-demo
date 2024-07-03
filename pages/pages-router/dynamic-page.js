const DynamicPage = ({ id }) => {
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

DynamicPage.subtitle = "dynamic page";

export default DynamicPage;

export const getServerSideProps = async () => {
  return {
    props: { id: new Date().getMilliseconds() },
  };
};
