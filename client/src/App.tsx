import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import JoinForm from "./components/molcules/join/JoinForm";
import LoginForm from "./components/molcules/loginForm/LoginForm";
import Main from "./components/pages/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/join",
    element: <JoinForm />,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
