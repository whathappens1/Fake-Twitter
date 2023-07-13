import Home from "./pages/home";
import Index from "./pages/index";
import Error from "./pages/error";
import Root from "./pages/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Index />} />
      <Route path="home" element={<Home />} />
      <Route path="*" element={<Error />} />

      {/* ... etc. */}
    </Route>
  )
);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;