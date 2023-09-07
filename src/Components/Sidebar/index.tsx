import React, { useState, useEffect } from "react";
import HomeIcon from "../../Icons/HomeIcon";
import TransactionsIcon from "../../Icons/TransactionsIcon";
import ProfileIcon from "../../Icons/ProfileIcon";
import LogoutIcon from "../../Icons/LogoutIcon";
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
} from "./styled";
import { useNavigate } from "react-router-dom";

interface ActiveTab {
	tabName: string;
}

const Sidebar: React.FC<ActiveTab> = ({ tabName }) => {
	const [activeNumber, setActiveNumber] = useState<{
		value: number;
	}>({ value: 1 });

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

	const logoutUser = () => {
		const navigate = useNavigate();
		console.log("logout");
		navigate("/login");
	};

	useEffect(() => {
		getActiveNumber();
	}, []);

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
						<LogoutIconWrap onClick={logoutUser}>
							<LogoutIcon></LogoutIcon>
						</LogoutIconWrap>
					</ProfileDetails>
				</Footer>
			</BottomPart>
		</MainContainer>
	);
};

export default Sidebar;
