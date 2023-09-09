import React from "react";
import {
	TransactionCard,
	TransactionTitle,
	TransactionCategory,
	TransactionDate,
	TransactionValue,
	EmptyDiv,
	CardUserName,
} from "./styled";

const TransactionsAdminListHeader = () => {
	return (
		<TransactionCard>
			<EmptyDiv></EmptyDiv>
			<CardUserName>User Name</CardUserName>
			<TransactionTitle>title</TransactionTitle>
			<TransactionCategory>shopping</TransactionCategory>
			<TransactionDate>Date</TransactionDate>
			<TransactionValue>Amount</TransactionValue>
		</TransactionCard>
	);
};

export default TransactionsAdminListHeader;
