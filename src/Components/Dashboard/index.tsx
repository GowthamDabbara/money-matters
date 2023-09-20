import React, { useContext, useEffect, useState } from "react";
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
import { observer } from "mobx-react";

const Dashboard = observer(() => {
	const userDetails: Userstore | null = useContext(UserContext);
	const [showData, setShowData] = useState(false);
	console.log(userDetails, "inside Dashboard");

	const userTransactionCard = () => {
		return <TransactionsUserCard />;
	};

	const adminTransactionCard = () => {
		return <TransactionsAdminCard />;
	};

	const onSubmitSuccess = () => {
		console.log(userDetails?.creditDebitTotals, " credit totals ");
		setShowData(true);
		// getProfileDetails(userID);
	};

	const onSubmitFailure = () => {
		// setShowLoader(false);
		// setShowError(true);
	};

	const getCreditDebitTotals = async () => {
		const url =
			"https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals";
		const id = userDetails?.profileDetails.id;
		if (!id) {
			console.log(id, "creds ID");
			throw new Error("typescript bypass");
		}
		const options = {
			headers: {
				"content-type": "application/json",
				"x-hasura-admin-secret":
					"g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
				"x-hasura-role": "user",
				"x-hasura-user-id": id.toString(),
			},
			method: "GET",
		};
		const response = await fetch(url, options);
		const data = await response.json();
		const condition = response.ok === true;
		if (condition) {
			userDetails.setCreditDebitTotals(data.totals_credit_debit_transactions);
			onSubmitSuccess();
		} else {
			onSubmitFailure();
		}
	};

	const getDashBoardData = async () => {
		getCreditDebitTotals();
	};

	useEffect(() => {
		getDashBoardData();
	}, []);

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
						<DebitCreditCards showData={showData} />
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
});

export default Dashboard;
