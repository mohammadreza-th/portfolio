import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./Pages/Homepage/Homepage";
import Projects from "./Pages/Projects/Projects";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "/projects",
		element: <Projects />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
