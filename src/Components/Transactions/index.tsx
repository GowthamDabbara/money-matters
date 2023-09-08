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
	TransactionCardHead,
	EmptyDiv,
	TransactionTitleHead,
	TransactionValueHead,
	EditIconWrapHead,
	DeleteIconWrapHead,
} from "./styled";
import Userstore from "../../Stores/Userstore";

const Transactions = () => {
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
				<TransactionValue admin={true}>150</TransactionValue>
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
						<TransactionCard>
							<TransactionTitleHead> Name</TransactionTitleHead>
							<TransactionCategory header={true}>Category</TransactionCategory>
							<TransactionDate header={true}>Date</TransactionDate>
							<TransactionValue header={true}>Amount</TransactionValue>
							<EmptyDiv></EmptyDiv>
						</TransactionCard>
						{userTransactionCard()}
						<TransactionCard>
							<IconWrap>
								<UpArrowIcon fillColor="#16DBAA"></UpArrowIcon>
							</IconWrap>
							<TransactionTitle>titletitle</TransactionTitle>
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
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{userTransactionCard()}
						{/* {adminTransactionCard()} */}
					</MiddleWrap>
				</Main>
			</MainContainer>
		</MainSection>
	);
};

export default Transactions;
