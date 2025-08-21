import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Footer } from "./components/Footer";
import { AppContainer } from "./GlobalStyles";

const App = () => {
  const elements = useRoutes(routes);

  return (
    <AppContainer>
      <main style={{ flex: 1 }}> {elements}</main>
      <Footer />
    </AppContainer>
  );
};

export default App;
