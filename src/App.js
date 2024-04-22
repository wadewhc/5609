// Filename - App.js

import "./App.css";
import Sidebar from "./pages/Sidebar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import ChartBar from "./pages/ChartBar";
import ChartLine from "./pages/ChartLine";
import RawDataHome from "./pages/RawDataHome"
import RawDataTable2012 from "./pages/raw_data_tables/RawDataTable_2012"
import RawDataTable2013 from "./pages/raw_data_tables/RawDataTable_2013"
import RawDataTable2014 from "./pages/raw_data_tables/RawDataTable_2014"
import RawDataTable2015 from "./pages/raw_data_tables/RawDataTable_2015"
import RawDataTable2016 from "./pages/raw_data_tables/RawDataTable_2016"
import RawDataTable2017 from "./pages/raw_data_tables/RawDataTable_2017"
import RawDataTable2018 from "./pages/raw_data_tables/RawDataTable_2018"
import RawDataTable2019 from "./pages/raw_data_tables/RawDataTable_2019"
import RawDataTable2020 from "./pages/raw_data_tables/RawDataTable_2020"
import RawDataTable2021 from "./pages/raw_data_tables/RawDataTable_2021"
import RawDataTable2022 from "./pages/raw_data_tables/RawDataTable_2022"
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
					path="/trend-analysis/raw-data-home"
					element={<RawDataHome />}
				/>
				<Route
					path="/trend-analysis/raw-data-table-2012"
					element={<RawDataTable2012 />}
				/>
				<Route
					path="/trend-analysis/raw-data-table-2013"
					element={<RawDataTable2013 />}
				/>
				<Route
					path="/trend-analysis/raw-data-table-2014"
					element={<RawDataTable2014 />}
				/>
				<Route
					path="/trend-analysis/raw-data-table-2015"
					element={<RawDataTable2015 />}
				/>
				<Route
					path="/trend-analysis/raw-data-table-2016"
					element={<RawDataTable2016 />}
				/>
				<Route
					path="/trend-analysis/raw-data-table-2017"
					element={<RawDataTable2017 />}
				/>
				<Route
					path="/trend-analysis/raw-data-table-2018"
					element={<RawDataTable2018 />}
				/>
				<Route
					path="/trend-analysis/raw-data-table-2019"
					element={<RawDataTable2019 />}
				/>
				<Route
					path="/trend-analysis/raw-data-table-2020"
					element={<RawDataTable2020 />}
				/>
				<Route
					path="/trend-analysis/raw-data-table-2021"
					element={<RawDataTable2021 />}
				/>
				<Route
					path="/trend-analysis/raw-data-table-2022"
					element={<RawDataTable2022 />}
				/>
				<Route
					path="/trend-analysis/bar-chart"
					element={<ChartBar />}
				/>
				<Route
					path="/trend-analysis/line-chart"
					element={<ChartLine />}
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
