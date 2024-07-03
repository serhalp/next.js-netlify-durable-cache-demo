export default function HomePage() {
  return (
    <>
      <h3>App Router</h3>
      <ul>
        <li>
          <a href="/static-page">a static page</a>
        </li>
        <li>
          <a href="/dynamic-cacheable-page">a dynamic page (cacheable)</a>
        </li>
        <li>
          <a href="/dynamic-page">a dynamic page (not cacheable)</a>
        </li>
        <li>
          <a href="/isr-page">an ISR page</a>
        </li>
      </ul>

      <h3>Pages Router</h3>
      <ul>
        <li>
          <a href="/pages-router/static-page">a static page</a>
        </li>
        <li>
          <a href="/pages-router/dynamic-cacheable-page">
            a dynamic page (cacheable)
          </a>
        </li>
        <li>
          <a href="/pages-router/dynamic-page">
            a dynamic page (not cacheable)
          </a>
        </li>
        <li>
          <a href="/pages-router/isr-page">an ISR page</a>
        </li>
      </ul>
    </>
  );
}
