import React from "react";
import { CardWrap, CardBalanceText, CardTypeText, Logo } from "./styled";

const DebitCreditCards = () => {
	return (
		<>
			<CardWrap>
				<div>
					<CardBalanceText credited={true}>$12,750</CardBalanceText>
					<CardTypeText>Credit</CardTypeText>
				</div>
				<Logo src="https://res.cloudinary.com/dfbkalvc3/image/upload/v1694000732/MoneyMatters/DashboardLeftCardImg_p2lv3b.png" />
			</CardWrap>
			<CardWrap>
				<div>
					<CardBalanceText credited={false}>$5,600</CardBalanceText>
					<CardTypeText>Debit</CardTypeText>
				</div>
				<Logo src="https://res.cloudinary.com/dfbkalvc3/image/upload/v1694002935/MoneyMatters/DashboardRightCardImg_y0xhom.png" />
			</CardWrap>
		</>
	);
};

export default DebitCreditCards;
