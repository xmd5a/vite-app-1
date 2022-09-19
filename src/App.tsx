import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import "./App.css";
import { TodoList } from "./TodoList";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoList />
    </QueryClientProvider>
  );
};

export default App;
