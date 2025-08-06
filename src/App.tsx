import { useRoutes } from "react-router-dom";
import { useEffect } from "react";

import routes from "./routes";
import axios from "axios";

const App = () => {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/api/marvel/characters")
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error("Erro ao buscar personagens:", error);
  //     });
  // }, []);

  const elements = useRoutes(routes);

  return <>{elements}</>;
};

export default App;
