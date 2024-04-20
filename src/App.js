// Filename - App.js

import "./App.css";
import Sidebar from "./pages/Sidebar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import {
  // TrendAnalysis,
  RawData,
  Chart,
} from "./pages/Trend_Analysis";
import Homepage from "./pages/Homepage";
import Maps from "./pages/Maps";
import Simulation from "./pages/Simulation";

function App() {
	return (
		<Router>
			<Sidebar />
			<Routes>
        		<Route
					path="/"
					element={<Homepage />}
				/>
				<Route
					path="/trend-analysis/raw-data"
					element={<RawData />}
				/>
				<Route
					path="/trend-analysis/chart"
					element={<Chart />}
				/>
				<Route
					path="/maps"
					element={<Maps />}
				/>
				<Route
					path="/simulation"
					element={<Simulation />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
