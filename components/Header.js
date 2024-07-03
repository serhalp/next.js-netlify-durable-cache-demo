export default function Header({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <div className="callout">
        ❌ This deployment has the Durable Cache feature{" "}
        <strong>disabled</strong>.
      </div>
    </>
  );
}
