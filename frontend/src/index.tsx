import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./GlobalStyles";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
