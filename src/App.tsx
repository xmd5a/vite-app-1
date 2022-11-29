import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StyledEngineProvider } from "@mui/material/styles";

import "./App.css";
import { TodoList } from "./ImagesList";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <TodoList />
      </StyledEngineProvider>
    </QueryClientProvider>
  );
};

export default App;
