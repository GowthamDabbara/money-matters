import React, { useContext } from "react";
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
import Cookie from "js-cookie";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import Sidebar from "../Sidebar";
import PlusIcon from "../../Icons/PlusIcon";
import DownArrowIcon from "../../Icons/DownArrowIcon";
import UpArrowIcon from "../../Icons/UpArrowIcon";
import EditIcon from "../../Icons/EditIcon";
import DeleteIcon from "../../Icons/DeleteIcon";
import {
	MainSection,
	MainContainer,
	TopBar,
	TopBarTitle,
	TransactionBtn,
	BottomWrap,
	DataTitle,
	Main,
	MiddleWrap,
	TopWrap,
	CardBalanceText,
	CardTypeText,
	CardWrap,
	Logo,
	TransactionCard,
	TransactionCategory,
	TransactionDate,
	TransactionTitle,
	TransactionValue,
	DeleteIconWrap,
	EditIconWrap,
	CardDP,
	CardProfileWrap,
	CardUserName,
	IconWrap,
	ChartDataText,
	ChartDataValue,
	ChartDataWrap,
	ChartTextWrap,
	CreditBox,
	DebitBox,
} from "./styled";
import Userstore from "../../Stores/Userstore";

const Dashboard = () => {
	const userDetails: Userstore | null = useContext(UserContext);
	console.log(userDetails);

	const userTransactionCard = () => {
		return (
			<TransactionCard>
				<IconWrap>
					<UpArrowIcon fillColor="#16DBAA"></UpArrowIcon>
				</IconWrap>
				<TransactionTitle>title</TransactionTitle>
				<TransactionCategory>shopping</TransactionCategory>
				<TransactionDate>28 Jan, 12.30 AM</TransactionDate>
				<TransactionValue>1500</TransactionValue>
				<EditIconWrap>
					<EditIcon></EditIcon>
				</EditIconWrap>
				<DeleteIconWrap>
					<DeleteIcon></DeleteIcon>
				</DeleteIconWrap>
			</TransactionCard>
		);
	};

	const adminTransactionCard = () => {
		return (
			<TransactionCard lastCard={true}>
				<IconWrap>
					<UpArrowIcon fillColor="#16DBAA"></UpArrowIcon>
				</IconWrap>
				<CardProfileWrap>
					<CardDP></CardDP>
					<CardUserName>name</CardUserName>
				</CardProfileWrap>
				<TransactionTitle admin={true}>title</TransactionTitle>
				<TransactionCategory>shopping</TransactionCategory>
				<TransactionDate>28 Jan, 12.30 AM</TransactionDate>
				<TransactionValue admin={true}>10050</TransactionValue>
			</TransactionCard>
		);
	};

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
		<MainSection>
			<Sidebar tabName="DASHBOARD" />
			<MainContainer>
				<TopBar>
					<TopBarTitle>Accounts</TopBarTitle>
					<TransactionBtn>
						<PlusIcon fillColor="white"></PlusIcon>Add Transaction
					</TransactionBtn>
				</TopBar>
				<Main>
					<TopWrap>
						<CardWrap>
							<div>
								<CardBalanceText credited={true}>$12,750</CardBalanceText>
								<CardTypeText>Credit</CardTypeText>
							</div>
							<Logo src="https://res.cloudinary.com/dfbkalvc3/image/upload/v1694000732/MoneyMatters/DashboardLeftCardImg_p2lv3b.png" />
						</CardWrap>
						<CardWrap>
							<div>
								<CardBalanceText credited={false}>$5,600</CardBalanceText>
								<CardTypeText>Debit</CardTypeText>
							</div>
							<Logo src="https://res.cloudinary.com/dfbkalvc3/image/upload/v1694002935/MoneyMatters/DashboardRightCardImg_y0xhom.png" />
						</CardWrap>
					</TopWrap>
					<DataTitle>Last Transaction</DataTitle>
					<MiddleWrap>
						{userTransactionCard()}
						{userTransactionCard()}
						<TransactionCard>
							<IconWrap>
								<UpArrowIcon fillColor="#16DBAA"></UpArrowIcon>
							</IconWrap>
							<TransactionTitle>title</TransactionTitle>
							<TransactionCategory>shopping</TransactionCategory>
							<TransactionDate>28 Jan, 12.30 AM</TransactionDate>
							<TransactionValue>00</TransactionValue>
							<EditIconWrap>
								<EditIcon></EditIcon>
							</EditIconWrap>
							<DeleteIconWrap>
								<DeleteIcon></DeleteIcon>
							</DeleteIconWrap>
						</TransactionCard>
						{adminTransactionCard()}
					</MiddleWrap>
					<DataTitle>Debit & Credit Overview</DataTitle>
					<BottomWrap>
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
					</BottomWrap>
				</Main>
			</MainContainer>
		</MainSection>
	);
};

export default Dashboard;
