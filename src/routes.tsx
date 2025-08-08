import { RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Cart from "./pages/Cart";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detalhes/:name",
    element: <Details />,
  },
  {
    path: "/carrinho",
    element: <Cart />,
  },
];

export default routes;
