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

const Transactions = () => {
	const [activeBtn, setActiveBtn] = useState("A");

	const userDetails: Userstore | null = useContext(UserContext);
	console.log(userDetails);

	const userTransactionCard = () => {
		return <TransactionsUserCard />;
	};

	const adminTransactionCard = () => {
		return <TransactionsAdminCard />;
	};

	interface BtnProps {
		name: string;
		list: string;
	}
	const handleBtnClick = (obj: BtnProps) => {
		setActiveBtn(obj.name);
		return obj.name;
	};

	const getList = () => {
		return "list";
	};

	return (
		<MainSection>
			<Sidebar tabName="TRANSACTIONS" />
			<MainContainer>
				<TopBarWrap>
					<TopBar>
						<TopBarTitle>Transactions</TopBarTitle>
						<TransactionBtn>
							<PlusIcon fillColor="white"></PlusIcon>Add Transaction
						</TransactionBtn>
					</TopBar>
					<div>
						<FilterBtn
							name="A"
							onClick={() => {
								handleBtnClick({ name: "A", list: "list" });
							}}
							active={activeBtn === "A"}
						>
							All Transactions
						</FilterBtn>
						<FilterBtn
							name="B"
							onClick={() => {
								handleBtnClick({ name: "B", list: "list" });
							}}
							active={activeBtn === "B"}
						>
							Debit
						</FilterBtn>
						<FilterBtn
							name="C"
							onClick={() => {
								handleBtnClick({ name: "C", list: getList() });
							}}
							active={activeBtn === "C"}
						>
							Credit
						</FilterBtn>
					</div>
				</TopBarWrap>
				<Main>
					<MiddleWrap>
						{/* <TransactionsListHeader /> */}
						<TransactionsAdminListHeader />
						{/* {userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()} */}
						{adminTransactionCard()}
						{adminTransactionCard()}
						{adminTransactionCard()}
						{adminTransactionCard()}
					</MiddleWrap>
				</Main>
			</MainContainer>
		</MainSection>
	);
};

export default Transactions;
