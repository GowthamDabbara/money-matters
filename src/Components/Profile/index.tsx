import React, { useContext, useState } from "react";
import Cookie from "js-cookie";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import Sidebar from "../Sidebar";
import PlusIcon from "../../Icons/PlusIcon";
import TransactionsListHeader from "../TransactionsListHeader";
import TransactionsAdminListHeader from "../TransactionsAdminListHeader";
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
	TopBarWrap,
	FilterBtn,
} from "./styled";
import Userstore from "../../Stores/Userstore";

const Profile = () => {
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
			<Sidebar tabName="PROFILE" />
			<MainContainer>
				<TopBarWrap>
					<TopBar>
						<TopBarTitle>Transactions</TopBarTitle>
						<TransactionBtn>
							<PlusIcon fillColor="white"></PlusIcon>Add Transaction
						</TransactionBtn>
					</TopBar>
				</TopBarWrap>
				<Main>
					{/* <MiddleWrap>
						<TransactionsListHeader />
						<TransactionsAdminListHeader />
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{adminTransactionCard()}
						{adminTransactionCard()}
						{adminTransactionCard()}
						{adminTransactionCard()}
					</MiddleWrap> */}
				</Main>
			</MainContainer>
		</MainSection>
	);
};

export default Profile;
