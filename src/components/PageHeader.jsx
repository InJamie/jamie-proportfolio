export default function PageHeader({ title, subtitle, action }) {
  return (
    <header className="page-header card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {action}
    </header>
  );
}
