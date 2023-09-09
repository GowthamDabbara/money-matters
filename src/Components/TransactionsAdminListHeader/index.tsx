import React from "react";
import {
	TransactionCard,
	TransactionTitle,
	TransactionCategory,
	TransactionDate,
	TransactionValue,
	CardDP,
	CardProfileWrap,
	CardUserName,
	IconWrap,
	CardUserNameTwo,
} from "./styled";
import UpArrowIcon from "../../Icons/UpArrowIcon";

const TransactionsAdminListHeader = () => {
	return (
		<TransactionCard lastCard={true}>
			<IconWrap>
				<UpArrowIcon fillColor="#16DBAA"></UpArrowIcon>
			</IconWrap>
			<CardProfileWrap>
				<CardDP></CardDP>
				<CardUserName></CardUserName>
			</CardProfileWrap>
			<CardUserNameTwo>User Name</CardUserNameTwo>
			<TransactionTitle>title</TransactionTitle>
			<TransactionCategory>shopping</TransactionCategory>
			<TransactionDate>28 Jan, 12.30 AM</TransactionDate>
			<TransactionValue>150</TransactionValue>
		</TransactionCard>
	);
};

export default TransactionsAdminListHeader;
