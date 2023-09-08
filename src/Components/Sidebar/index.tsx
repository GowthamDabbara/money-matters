import React, { useState, useEffect, ReactNode } from "react";
import HomeIcon from "../../Icons/HomeIcon";
import TransactionsIcon from "../../Icons/TransactionsIcon";
import ProfileIcon from "../../Icons/ProfileIcon";
import LogoutIcon from "../../Icons/LogoutIcon";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import ConfrimPopup from "../ConfrimPopup";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {
	MainContainer,
	TopPart,
	BottomPart,
	Logo,
	NavTabs,
	Tab,
	LeftBar,
	Icon,
	Title,
	Footer,
	Mail,
	Name,
	ProfileDetails,
	ProfilePic,
	LogoutIconWrap,
	StyledPopup,
} from "./styled";

interface ActiveTab {
	tabName: string;
}

const Sidebar: React.FC<ActiveTab> = ({ tabName }) => {
	const [activeNumber, setActiveNumber] = useState<{
		value: number;
	}>({ value: 1 });
	const [openPopup, setOpenPopup] = useState<{
		openPopup: boolean;
	}>({ openPopup: false });

	const getActiveNumber = () => {
		switch (tabName) {
			case "DASHBOARD":
				setActiveNumber({ value: 1 });
				break;
			case "TRANSACTIONS":
				setActiveNumber({ value: 2 });
				break;
			case "PROFILE":
				setActiveNumber({ value: 3 });
				break;
		}
	};

	const getIcon = (iconNumber: number, active: boolean) => {
		switch (iconNumber) {
			case 1:
				return <HomeIcon fillColor={active ? "#2D60FF" : "#5B73A0"}></HomeIcon>;
			case 2:
				return (
					<TransactionsIcon
						fillColor={active ? "#2D60FF" : "#5B73A0"}
					></TransactionsIcon>
				);
			case 3:
				return (
					<ProfileIcon fillColor={active ? "#2D60FF" : "#5B73A0"}></ProfileIcon>
				);
		}
	};

	const renderIcon = (iconNumber: number, active: boolean) => {
		return (
			<Icon active={1 === activeNumber.value}>
				{getIcon(iconNumber, active)}
			</Icon>
		);
	};

	const navigate = useNavigate();

	const logoutUser = () => {
		// setOpenPopup({ openPopup: true });
		Cookie.remove("user_id");
		navigate("/login");
	};

	const showPopup = () => {
		console.log(openPopup, "close popo");
		setOpenPopup({ openPopup: false });
		// console.log(openPopup);
	};

	useEffect(() => {
		getActiveNumber();
	}, []);
	{
		console.log(openPopup, "first state popup");
	}
	if (openPopup) {
		if ({ openPopup: true }) {
			console.log("empty if conditions");
		}
	}
	let popupValue = { openPopup: true } ? true : false;
	{
		console.log(popupValue, openPopup, "var,  state");
	}
	return (
		<MainContainer>
			<TopPart>
				<Logo src="https://res.cloudinary.com/dfbkalvc3/image/upload/v1693984030/MoneyMatters/Logo_pof7su.png" />
				<NavTabs>
					<Tab>
						<LeftBar active={1 === activeNumber.value}></LeftBar>
						{renderIcon(1, 1 === activeNumber.value)}
						<Title active={1 === activeNumber.value}>Dashboard</Title>
					</Tab>
					<Tab>
						<LeftBar active={2 === activeNumber.value}></LeftBar>
						{renderIcon(2, 2 === activeNumber.value)}
						<Title active={2 === activeNumber.value}>Transactions</Title>
					</Tab>
					<Tab>
						<LeftBar active={3 === activeNumber.value}></LeftBar>
						{renderIcon(3, 3 === activeNumber.value)}
						<Title active={3 === activeNumber.value}>Profile</Title>
					</Tab>
				</NavTabs>
			</TopPart>
			<BottomPart>
				<Footer>
					<ProfilePic></ProfilePic>
					<ProfileDetails>
						<Name>temp</Name>
						<Mail>olivia@untitledui.com</Mail>
						{/* <LogoutIconWrap onClick={logoutUser}>
							<LogoutIcon></LogoutIcon>
						</LogoutIconWrap> */}
						<StyledPopup
							trigger={
								<LogoutIconWrap onClick={logoutUser}>
									<LogoutIcon></LogoutIcon>
								</LogoutIconWrap>
							}
							arrow={false}
							position="top center"
							modal
							lockScroll
							open={{ openPopup: true } ? true : false}
						>
							<ConfrimPopup callBack={logoutUser} cancel={showPopup} />
							<button onClick={showPopup}>clickhere</button>
						</StyledPopup>
					</ProfileDetails>
				</Footer>
			</BottomPart>
		</MainContainer>
	);
};

export default Sidebar;
