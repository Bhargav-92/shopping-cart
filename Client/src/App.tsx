import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./routes";
import Providers from "./components/Providers";

function App() {
const router  = createBrowserRouter(routes)

	return (
		<>
      <Providers>
        <RouterProvider router={router} />
      </Providers>
		</>
	);
}

export default App;
