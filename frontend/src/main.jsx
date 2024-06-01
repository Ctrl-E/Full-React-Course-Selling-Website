import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/Router";

import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";

const queryClient = new QueryClient();

Aos.init();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={Router} />
  </QueryClientProvider>
);
