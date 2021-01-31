import type { Loader } from "@remix-run/data";
import { Meta, Scripts, Styles, useRouteData } from "@remix-run/react";
import { Link, Outlet } from "react-router-dom";

export let loader: Loader = async () => {
  return new Response(JSON.stringify({ date: new Date() }, null, 2), {
    headers: {
      "Cache-Control":
        "public, max-age=180, s-max-age=604800, stale-while-revalidate",
    },
  });
};
export function headers({ loaderHeaders }: { loaderHeaders: Headers }) {
  return {
    "cache-control": loaderHeaders.get("cache-control"),
  };
}

export default function App() {
  let data = JSON.parse(useRouteData());
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Styles />
      </head>
      <body className="bg-primary-600 text-neutral-000">
        <nav style={{ display: "flex", gap: "20px" }}>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/projects">Projects</Link>
          </div>
        </nav>
        <Outlet />
        <footer>
          <p>This page was built at {data.date.toLocaleString()}</p>
        </footer>
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Oops!</title>
      </head>
      <body>
        <div>
          <h1>App Error</h1>
          <pre>{error.message}</pre>
          <p>
            Replace this UI with what you want users to see when your app throws
            uncaught errors. The file is at <code>app/App.tsx</code>.
          </p>
        </div>

        <Scripts />
      </body>
    </html>
  );
}
