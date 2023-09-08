import React, { RefCallback } from "react";
import {
	BtnsWrap,
	CancelBtn,
	ConfrimBtn,
	ContentWrap,
	Description,
	MainContainer,
	Title,
} from "./styled";

type MyCallBackType = () => void;

interface Props {
	callBack: MyCallBackType;
	cancel: MyCallBackType;
}

const ConfrimPopup: React.FC<Props> = ({ callBack, cancel }) => {
	return (
		<MainContainer>
			<ContentWrap>
				<Title>Are you sure?</Title>
				<Description>this is logging out</Description>
				<BtnsWrap>
					<ConfrimBtn onClick={() => callBack()}>Yes, Logout</ConfrimBtn>
					<CancelBtn onClick={() => cancel()}>Cancel</CancelBtn>
				</BtnsWrap>
			</ContentWrap>
		</MainContainer>
	);
};

export default ConfrimPopup;
