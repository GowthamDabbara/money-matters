import React, { useContext } from "react";
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
import Userstore from "../../Stores/Userstore";
import { UserContext } from "../../App";
import { observer } from "mobx-react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

interface Props {
	id?: number;
	transaction_name?: string;
	category?: string;
	date?: string;
	amount?: number;
}

interface CardProps {
	props?: Props;
	lastCard?: boolean;
}

const TransactionsUserCard: React.FC<CardProps> = observer(
	({ props, lastCard }) => {
		const userDetails: Userstore | null = useContext(UserContext);
		const show = userDetails?.gotTransactions;

		console.log(props?.amount, "props inside card");

		return (
			<>
				{show ? (
					<TransactionCard key={props?.id} lastCard={lastCard}>
						<IconWrap>
							<UpArrowIcon fillColor="#16DBAA"></UpArrowIcon>
						</IconWrap>
						<TransactionTitle>{props?.transaction_name}</TransactionTitle>
						<TransactionCategory>{props?.category}</TransactionCategory>
						<TransactionDate>{props?.date}</TransactionDate>
						<TransactionValue>{props?.amount}</TransactionValue>
						<EditIconWrap>
							<EditIcon></EditIcon>
						</EditIconWrap>
						<DeleteIconWrap>
							<DeleteIcon></DeleteIcon>
						</DeleteIconWrap>
					</TransactionCard>
				) : (
					<TransactionCard showLoader={true}>
						<Skeleton wrapper={TransactionCard} height="48px" count={3} />
					</TransactionCard>
				)}
			</>
		);
	}
);

export default TransactionsUserCard;
