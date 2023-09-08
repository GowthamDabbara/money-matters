import React from "react";
import {
	Main,
	Title,
	Description,
	BtnsWrap,
	LogoutBtn,
	CancelBtn,
} from "./styled";

type myType = () => void;

interface CallBacks {
	callBack: myType;
	cancel: myType;
}

const ConfrimPopup: React.FC<CallBacks> = ({ callBack, cancel }) => {
	return (
		<Main>
			<Title>Are you sure?</Title>
			<Description>logging you out from web</Description>
			<BtnsWrap>
				<LogoutBtn onClick={callBack}>Yes, Logout</LogoutBtn>
				<CancelBtn onClick={cancel}>Cancel</CancelBtn>
			</BtnsWrap>
		</Main>
	);
};

export default ConfrimPopup;
