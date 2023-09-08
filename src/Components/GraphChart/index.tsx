import React from "react";
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import {
	ChartDataWrap,
	ChartTextWrap,
	ChartDataValue,
	ChartDataText,
	DebitBox,
	CreditBox,
} from "./styled";

const GraphChart = () => {
	const data = [
		{
			name: "Sat",
			Credit: 350,
			Debit: 200,
		},
		{
			name: "Sun",
			Credit: 300,
			Debit: 198,
		},
		{
			name: "Mon",
			Credit: 200,
			Debit: 600,
		},
		{
			name: "Tue",
			Credit: 280,
			Debit: 308,
		},
		{
			name: "Wed",
			Credit: 190,
			Debit: 400,
		},
		{
			name: "Thu",
			Credit: 290,
			Debit: 300,
		},
		{
			name: "Fri",
			Credit: 490,
			Debit: 300,
		},
	];

	return (
		<>
			<ChartDataWrap>
				<ChartTextWrap>
					<ChartDataValue>$7,560 </ChartDataValue>
					<ChartDataText>debited & </ChartDataText>
					<ChartDataValue>$4,560 </ChartDataValue>
					<ChartDataText>Credited in this Week</ChartDataText>
				</ChartTextWrap>
				<ChartTextWrap>
					<DebitBox></DebitBox>
					<ChartDataText> Debit </ChartDataText>
					<CreditBox></CreditBox>
					<ChartDataText> Credit</ChartDataText>
				</ChartTextWrap>
			</ChartDataWrap>
			<ResponsiveContainer width="100%" height={300}>
				<BarChart
					width={800}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid
						vertical={false}
						strokeDasharray="0 0"
						horizontalPoints={[50, 100, 150, 200, 250]}
					/>
					<XAxis
						axisLine={false}
						dataKey="name"
						tickLine={false}
						tick={{ fill: "#718EBF", fontSize: "14px" }}
					/>
					<YAxis
						domain={[0, 500]}
						ticks={[0, 100, 200, 300, 400, 500]}
						allowDataOverflow={false}
						type="number"
						axisLine={false}
						tickLine={false}
						tick={{ fill: "#718EBF", fontSize: "14px" }}
					/>
					<Tooltip />
					<Bar dataKey="Debit" fill="#4D78FF" radius={10} barSize={25} />
					<Bar dataKey="Credit" fill="#FCAA0B" radius={10} barSize={25} />
				</BarChart>
			</ResponsiveContainer>
		</>
	);
};

export default GraphChart;
