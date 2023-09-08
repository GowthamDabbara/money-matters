import React from "react";
import PlusIcon from "../../Icons/PlusIcon";
import DownArrowIcon from "../../Icons/DownArrowIcon";
import UpArrowIcon from "../../Icons/UpArrowIcon";
import {
	TransactionCard,
	TransactionCategory,
	TransactionDate,
	TransactionTitle,
	TransactionValue,
	CardDP,
	CardProfileWrap,
	CardUserName,
	IconWrap,
} from "./styled";

const TransactionsAdminCard = () => {
	return (
		<TransactionCard lastCard={true}>
			<IconWrap>
				<UpArrowIcon fillColor="#16DBAA"></UpArrowIcon>
			</IconWrap>
			<CardProfileWrap>
				<CardDP></CardDP>
				<CardUserName>name</CardUserName>
			</CardProfileWrap>
			<TransactionTitle>title</TransactionTitle>
			<TransactionCategory>shopping</TransactionCategory>
			<TransactionDate>28 Jan, 12.30 AM</TransactionDate>
			<TransactionValue>150</TransactionValue>
		</TransactionCard>
	);
};

export default TransactionsAdminCard;
