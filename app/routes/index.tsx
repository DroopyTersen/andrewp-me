import { useRouteData } from "@remix-run/react";
import type { Loader } from "@remix-run/data";

export let loader: Loader = async () => {
  return new Response(JSON.stringify({ message: "this is awesome 😎" }), {
    headers: {
      "Cache-Control":
        "public, max-age=180, s-max-age=604800, stale-while-revalidate",
    },
  });
  return;
};

export function headers({ loaderHeaders }: { loaderHeaders: Headers }) {
  return {
    "cache-control": loaderHeaders.get("cache-control"),
  };
}

export function meta() {
  return {
    title: "Andrew's Portfolio",
    description: "Welcome to Andrew Petersen's portfolio!",
  };
}

export default function Index() {
  let data = JSON.parse(useRouteData());

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Welcome to Remix!</h2>
      <p>
        <a href="https://remix.run/dashboard/docs">Check out the docs</a> to get
        started.
      </p>
      <p>Message from the loader: {data.message}</p>
    </div>
  );
}
