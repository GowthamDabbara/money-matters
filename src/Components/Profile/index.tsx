import React, { useContext, useState } from "react";
import Cookie from "js-cookie";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import Sidebar from "../Sidebar";
import PlusIcon from "../../Icons/PlusIcon";
import TransactionsListHeader from "../TransactionsListHeader";
import TransactionsAdminListHeader from "../TransactionsAdminListHeader";
import TransactionsUserCard from "../TransactionsUserCard";
import TransactionsAdminCard from "../TransactionsAdminCard";
import {
	MainSection,
	MainContainer,
	TopBar,
	TopBarTitle,
	TransactionBtn,
	Main,
	MiddleWrap,
	TopBarWrap,
	FilterBtn,
	Card,
	ProfilePic,
} from "./styled";
import {
	Container,
	BGContainer,
	LoginBG,
	FormContainer,
	Form,
	Logo,
	InputContainer,
	InputLabel,
	UserInpField,
	LoginButton,
	ErrorMessage,
} from "./styled";
import Userstore from "../../Stores/Userstore";

const Profile = () => {
	const userDetails: Userstore | null = useContext(UserContext);
	console.log(userDetails);

	const userTransactionCard = () => {
		return <TransactionsUserCard />;
	};

	const adminTransactionCard = () => {
		return <TransactionsAdminCard />;
	};

	const renderUsernameField = () => {
		return (
			<>
				<InputLabel className="input-label" htmlFor="username">
					User Name
				</InputLabel>
				<UserInpField
					type="text"
					id="username"
					placeholder="Username"
					// value={username}
					// onChange={(e) => onChangeUsername(e)}
				/>
			</>
		);
	};
	const renderPasswordField = () => {
		return (
			<>
				<InputLabel className="input-label" htmlFor="password">
					Password*
				</InputLabel>
				<UserInpField
					type="password"
					id="password"
					placeholder="Password"
					// value={password}
					// onChange={(e) => onChangePassword(e)}
				/>
			</>
		);
	};

	return (
		<MainSection>
			<Sidebar tabName="PROFILE" />
			<MainContainer>
				<TopBarWrap>
					<TopBar>
						<TopBarTitle>Profile</TopBarTitle>
						<TransactionBtn>
							<PlusIcon fillColor="white"></PlusIcon>Add Transaction
						</TransactionBtn>
					</TopBar>
				</TopBarWrap>
				<Main>
					<MiddleWrap>
						<ProfilePic></ProfilePic>
						<Card>
							<Form onSubmit={(e) => ""}>
								<InputContainer>{renderUsernameField()}</InputContainer>
								<InputContainer>{renderUsernameField()}</InputContainer>
								<InputContainer>{renderUsernameField()}</InputContainer>
								<InputContainer>{renderPasswordField()}</InputContainer>
								<InputContainer>{renderUsernameField()}</InputContainer>
								<InputContainer>{renderUsernameField()}</InputContainer>
								<InputContainer>{renderUsernameField()}</InputContainer>
								<InputContainer>{renderUsernameField()}</InputContainer>
							</Form>
						</Card>
					</MiddleWrap>
				</Main>
			</MainContainer>
		</MainSection>
	);
};

export default Profile;
