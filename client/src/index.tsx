import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
console.log(queryClient);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </QueryClientProvider>
);
