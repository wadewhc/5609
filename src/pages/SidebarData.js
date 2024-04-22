import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { FaArrowTrendUp, FaChartBar, FaChartLine, FaMapLocationDot } from "react-icons/fa6";

export const SidebarData = [
	{
		title: "Trend Analysis",
		// path: "/trend-analysis",
		icon: <FaArrowTrendUp />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Raw Data",
				path: "/trend-analysis/raw-data-home",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Bar Chart",
				path: "/trend-analysis/bar-chart",
				icon: <FaChartBar />,
			},
			{
				title: "Line Chart",
				path: "/trend-analysis/line-chart",
				icon: <FaChartLine />,
			},
		],
	},
	{
		title: "Map",
		path: "/maps",
		icon: <FaMapLocationDot />,
	},
	{
		title: "Simulation",
		path: "/simulation",
		icon: <FaUsers />,
	},
];
