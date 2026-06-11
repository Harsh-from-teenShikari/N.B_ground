export function PageContainer({ title, children }) {
  return (
    <section className="container page-section">
      <h1>{title}</h1>
      {children}
    </section>
  );
}
