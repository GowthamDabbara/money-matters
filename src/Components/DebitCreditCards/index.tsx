import React, { useContext, useState } from "react";
import { CardWrap, CardBalanceText, CardTypeText, Logo } from "./styled";
import { UserContext } from "../../App";
import { observer } from "mobx-react";

interface totalsProps {
	showData: boolean;
}

const DebitCreditCards: React.FC<totalsProps> = observer(({ showData }) => {
	let userDetails = useContext(UserContext);
	// const [showData, setShowData] = useState(
	// 	userDetails?.creditDebitTotals?.totals_credit_debit_transactions[0].sum
	// 		? true
	// 		: false
	// );

	// if (!userDetails?.creditDebitTotals?.totals_credit_debit_transactions) {
	// 	console.log(
	// 		userDetails?.creditDebitTotals?.totals_credit_debit_transactions,
	// 		"issue inside creditdebit totals."
	// 	);
	// 	throw new Error("typescript bypass");
	// }

	// console.log(
	// 	userDetails?.creditDebitTotals?.totals_credit_debit_transactions,
	// 	"userdetails current."
	// );
	if (showData) {
		console.log(
			userDetails?.creditDebitTotals?.totals_credit_debit_transactions,
			"totals are set inside debits."
		);
	}
	return (
		<>
			<CardWrap>
				<div>
					<CardBalanceText credited={true}>
						{showData
							? userDetails?.creditDebitTotals
									?.totals_credit_debit_transactions[1]?.sum
							: "100"}
					</CardBalanceText>
					<CardTypeText>Credit</CardTypeText>
				</div>
				<Logo src="https://res.cloudinary.com/dfbkalvc3/image/upload/v1694000732/MoneyMatters/DashboardLeftCardImg_p2lv3b.png" />
			</CardWrap>
			<CardWrap>
				<div>
					<CardBalanceText credited={false}>
						{showData
							? userDetails?.creditDebitTotals
									?.totals_credit_debit_transactions[0]?.sum
							: "100"}
					</CardBalanceText>
					<CardTypeText>Debit</CardTypeText>
				</div>
				<Logo src="https://res.cloudinary.com/dfbkalvc3/image/upload/v1694002935/MoneyMatters/DashboardRightCardImg_y0xhom.png" />
			</CardWrap>
		</>
	);
});

export default DebitCreditCards;
