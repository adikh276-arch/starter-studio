import { Link } from "react-router";

export function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">404</p>
        <h1 className="text-3xl font-semibold mb-4">Page not found</h1>
        <p className="text-muted-foreground mb-6">The page you're looking for doesn't exist.</p>
        <Link to="/" className="inline-flex items-center text-primary hover:underline">Return home</Link>
      </div>
    </main>
  );
}
