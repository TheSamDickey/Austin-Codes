import { useState } from "react";
import "./Home.css";

export const Home = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<div></div>
			<h1>Austin Codes 😎</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
};
