//@ts-nocheck
import React, { useState, useEffect, ReactNode, useContext } from "react";
import HomeIcon from "../../Icons/HomeIcon";
import TransactionsIcon from "../../Icons/TransactionsIcon";
import ProfileIcon from "../../Icons/ProfileIcon";
import LogoutIcon from "../../Icons/LogoutIcon";
import Cookie from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import ConfrimPopup from "../ConfrimPopup";
import "reactjs-popup/dist/index.css";
import { UserContext } from "../../App";
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
interface SideBarProps {
	tabName: string;
}

const Sidebar: React.FC<SideBarProps> = observer(({ tabName }) => {
	const [activeNumber, setActiveNumber] = useState<{
		value: number;
	}>({ value: null });

	const userDetails = useContext(UserContext);

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
		Cookie.remove("user_id");
		navigate("/login");
	};

	const showPopup = () => {};

	useEffect(() => {
		getActiveNumber();
		getDashBoardDetails;
	}, []);

	return (
		<MainContainer>
			<TopPart>
				<Logo src="https://res.cloudinary.com/dfbkalvc3/image/upload/v1693984030/MoneyMatters/Logo_pof7su.png" />
				<NavTabs>
					<Link to={`/`} style={{ textDecoration: "none" }}>
						<Tab>
							<LeftBar active={1 === activeNumber.value}></LeftBar>
							{renderIcon(1, 1 === activeNumber.value)}
							<Title active={1 === activeNumber.value}>Dashboard</Title>
						</Tab>
					</Link>
					<Link to={`/transactions`} style={{ textDecoration: "none" }}>
						<Tab>
							<LeftBar active={2 === activeNumber.value}></LeftBar>
							{renderIcon(2, 2 === activeNumber.value)}
							<Title active={2 === activeNumber.value}>Transactions</Title>
						</Tab>
					</Link>
					<Link to={`/profile`} style={{ textDecoration: "none" }}>
						<Tab>
							<LeftBar active={3 === activeNumber.value}></LeftBar>
							{renderIcon(3, 3 === activeNumber.value)}
							<Title active={3 === activeNumber.value}>Profile</Title>
						</Tab>
					</Link>
				</NavTabs>
			</TopPart>
			<BottomPart>
				<Footer>
					<ProfilePic></ProfilePic>
					<ProfileDetails>
						<Name>{userDetails?.profileDetails.name}</Name>
						<Mail>{userDetails?.profileDetails.email}</Mail>
						<LogoutIconWrap onClick={logoutUser}>
							<LogoutIcon></LogoutIcon>
						</LogoutIconWrap>
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
						>
							<ConfrimPopup callBack={logoutUser} cancel={showPopup} />
						</StyledPopup>
					</ProfileDetails>
				</Footer>
			</BottomPart>
		</MainContainer>
	);
});

export default Sidebar;
