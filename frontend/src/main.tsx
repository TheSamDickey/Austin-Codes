import React from "react";
import ReactDOM from "react-dom/client";
import * as ReactRouterDom from "react-router-dom";
import "./global/index.css";
import { Home } from "./pages/Home/Home";
const { RouterProvider, createBrowserRouter } = ReactRouterDom;

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/home",
		element: <Home />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
