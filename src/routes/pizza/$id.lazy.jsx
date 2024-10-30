import { createLazyFileRoute } from "@tanstack/react-router";
import Details from "../../screen/Details";

export const Route = createLazyFileRoute("/pizza/$id")({
  component: () => <DynamicRoute />,
});

function DynamicRoute() {
  const { id } = Route.useParams();
  return <Details id={id} />;
}
