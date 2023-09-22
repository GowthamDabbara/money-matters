import React, { useContext } from "react";
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
import Userstore from "../../Stores/Userstore";
import { UserContext } from "../../App";
import Skeleton from "react-loading-skeleton";

interface Props {
	id?: number;
	transaction_name?: string;
	category?: string;
	date?: string;
	amount?: number;
	type?: string;
	user_id?: number;
}
interface CardProps {
	props?: Props;
	lastCard?: boolean;
}

const TransactionsAdminCard: React.FC<CardProps> = ({ props, lastCard }) => {
	const userDetails: Userstore | null = useContext(UserContext);
	const show = userDetails?.gotTransactions;

	return (
		<>
			{show ? (
				<TransactionCard lastCard={lastCard}>
					<IconWrap>
						<UpArrowIcon fillColor="#16DBAA"></UpArrowIcon>
					</IconWrap>
					<CardProfileWrap>
						<CardDP></CardDP>
						<CardUserName>name</CardUserName>
					</CardProfileWrap>
					<TransactionTitle>{props?.transaction_name}</TransactionTitle>
					<TransactionCategory>{props?.category}</TransactionCategory>
					<TransactionDate>{props?.date}</TransactionDate>
					<TransactionValue>{props?.amount}</TransactionValue>
				</TransactionCard>
			) : (
				<TransactionCard showLoader={true}>
					<Skeleton wrapper={TransactionCard} height="48px" count={3} />
				</TransactionCard>
			)}
		</>
	);
};

export default TransactionsAdminCard;
