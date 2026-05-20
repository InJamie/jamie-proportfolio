export default function AuthLayout({ title, children }) {
  return (
    <div className="auth-page">
      <div className="absolute inset-0 bg-white" aria-hidden />
      <div
        className="absolute inset-0 bg-brand"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
          backgroundColor: "var(--color-brand)",
          opacity: 0.55,
        }}
        aria-hidden
      />

      <div className="auth-card">
        <h1 className="auth-title">{title}</h1>
        {children}
      </div>
    </div>
  );
}
