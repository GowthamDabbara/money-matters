import React from "react";
import {
	TransactionCard,
	TransactionTitle,
	TransactionCategory,
	TransactionDate,
	TransactionValue,
	EmptyDiv,
} from "./styled";

const TransactionsListHeader = () => {
	return (
		<TransactionCard>
			<TransactionTitle>Transaction Name</TransactionTitle>
			<TransactionCategory header={true}>Category</TransactionCategory>
			<TransactionDate header={true}>Date</TransactionDate>
			<TransactionValue header={true}>Amount</TransactionValue>
			<EmptyDiv></EmptyDiv>
		</TransactionCard>
	);
};

export default TransactionsListHeader;
