import React from "react";
import DeleteIcon from "../../Icons/DeleteIcon";
import EditIcon from "../../Icons/EditIcon";
import UpArrowIcon from "../../Icons/UpArrowIcon";
import {
	TransactionCard,
	TransactionCategory,
	TransactionDate,
	TransactionTitle,
	TransactionValue,
	DeleteIconWrap,
	EditIconWrap,
	IconWrap,
} from "./styled";

const TransactionsUserCard = () => {
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

export default TransactionsUserCard;
