import React, { useContext } from "react";
import Cookie from "js-cookie";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import Sidebar from "../Sidebar";
import PlusIcon from "../../Icons/PlusIcon";
import TransactionsListHeader from "../TransactionsListHeader";
import TransactionsUserCard from "../TransactionsUserCard";
import TransactionsAdminCard from "../TransactionsAdminCard";
import {
	MainSection,
	MainContainer,
	TopBar,
	TopBarTitle,
	TransactionBtn,
	Main,
	MiddleWrap,
} from "./styled";
import Userstore from "../../Stores/Userstore";

const Transactions = () => {
	const userDetails: Userstore | null = useContext(UserContext);
	console.log(userDetails);

	const userTransactionCard = () => {
		return <TransactionsUserCard />;
	};

	const adminTransactionCard = () => {
		return <TransactionsAdminCard />;
	};

	return (
		<MainSection>
			<Sidebar tabName="TRANSACTIONS" />
			<MainContainer>
				<TopBar>
					<TopBarTitle>Accounts</TopBarTitle>
					<TransactionBtn>
						<PlusIcon fillColor="white"></PlusIcon>Add Transaction
					</TransactionBtn>
				</TopBar>
				<Main>
					<MiddleWrap>
						<TransactionsListHeader />
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{adminTransactionCard()}
					</MiddleWrap>
				</Main>
			</MainContainer>
		</MainSection>
	);
};

export default Transactions;
