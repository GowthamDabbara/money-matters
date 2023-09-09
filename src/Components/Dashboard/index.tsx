import React, { useContext } from "react";
import Cookie from "js-cookie";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import Sidebar from "../Sidebar";
import PlusIcon from "../../Icons/PlusIcon";
import GraphChart from "../GraphChart";
import TransactionsAdminCard from "../TransactionsAdminCard";
import TransactionsUserCard from "../TransactionsUserCard";
import DebitCreditCards from "../DebitCreditCards";
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
} from "./styled";
import Userstore from "../../Stores/Userstore";

const Dashboard = () => {
	const userDetails: Userstore | null = useContext(UserContext);
	console.log(userDetails, "inside Dashboard");

	const userTransactionCard = () => {
		return <TransactionsUserCard />;
	};

	const adminTransactionCard = () => {
		return <TransactionsAdminCard />;
	};

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
						<DebitCreditCards />
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
