import { RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detalhes/:name",
    element: <Details />,
  },
];

export default routes;
