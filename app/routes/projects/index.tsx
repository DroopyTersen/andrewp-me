import { useRouteData } from "@remix-run/react";

export const headers = () => {
  return {
    "Cache-Control":
      "public, max-age=180, s-max-age=604800, stale-while-revalidate",
  };
};

export function meta() {
  return {
    title: "Andrew's Projects",
    description: "Notable things that Andrew has built.",
  };
}

export default function Index() {
  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Projects</h2>
    </div>
  );
}
