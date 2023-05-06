import React, { PureComponent } from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

// My Assignment Result
const data = [
	{
		name: "Assignment-1",
		pv: 60,
	},
	{
		name: "Assignment-3",
		pv: 60,
	},
	{
		name: "Assignment-4",
		pv: 60,
	},
	{
		name: "Assignment-5",
		pv: 60,
	},
	{
		name: "Assignment-6",
		pv: 60,
	},
	{
		name: "Assignment-7",
		pv: 60,
	},
	{
		name: "Assignment-8",
		pv: 60,
	},
];

export default class Example extends PureComponent {
	static demoUrl = "https://codesandbox.io/s/synchronized-area-chart-kpg1s";

	render() {
		return (
			<div className="mt-5" style={{ width: "95%" }}>
				<ResponsiveContainer className="custom-container" height={200}>
					<AreaChart
						width={500}
						height={200}
						data={data}
						syncId="anyId"
						margin={{
							top: 10,
							right: 30,
							left: 0,
							bottom: 0,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Area
							type="monotone"
							dataKey="pv"
							stroke="#82ca9dd1"
							fill="#82ca9d"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		);
	}
}
