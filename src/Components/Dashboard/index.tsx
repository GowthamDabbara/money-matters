import React, { useContext } from "react";
import Cookie from "js-cookie";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import Sidebar from "../Sidebar";
import PlusIcon from "../../Icons/PlusIcon";
import GraphChart from "../GraphChart";
import TransactionsAdminCard from "../TransactionsAdminCard";
import TransactionsUserCard from "../TransactionsUserCard";
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
} from "./styled";
import Userstore from "../../Stores/Userstore";

const Dashboard = () => {
	const userDetails: Userstore | null = useContext(UserContext);
	console.log(userDetails);

	const userTransactionCard = () => {
		return <TransactionsUserCard />;
	};

	const adminTransactionCard = () => {
		return <TransactionsAdminCard />;
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
						{adminTransactionCard()}
					</MiddleWrap>
					<DataTitle>Debit & Credit Overview</DataTitle>
					<BottomWrap>
						<GraphChart />
					</BottomWrap>
				</Main>
			</MainContainer>
		</MainSection>
	);
};

export default Dashboard;
