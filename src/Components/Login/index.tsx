import React from "react";
import ReactLoading from "react-loading";
import {
	MainContainer,
	Form,
	InputContainer,
	ErrorMessage,
	LoginButton,
	InputLabel,
	UserInpField,
	LoaderWrap,
} from "./styled";
import { useState, useContext } from "react";
import Cookie from "js-cookie";
import { createBrowserHistory } from "history";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import { UserContext } from "../../App";
import Userstore from "../../Stores/Userstore";

const Login = observer(() => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showError, setShowError] = useState(false);
	const [showLoader, setShowLoader] = useState(false);

	// TODO: uncomment to cancel return to login
	const user_id = Cookie.get("user_id");
	if (user_id !== undefined) {
		return <Navigate to="/" />;
	}

	const userDetails: Userstore | null = useContext(UserContext);

	// throw error if user details is null here itself.

	const onChangeUsername = (val: string) => {
		setUsername(val);
	};
	const onChangePassword = (val: string) => {
		setPassword(val);
	};

	const renderUsernameField = () => {
		return (
			<>
				<InputLabel className="input-label" htmlFor="username">
					Username*
				</InputLabel>
				<UserInpField
					type="text"
					id="username"
					placeholder="Username"
					value={username}
					onChange={(e: React.FormEvent<HTMLInputElement>) =>
						onChangeUsername(e.currentTarget.value)
					}
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
					value={password}
					onChange={(e: React.FormEvent<HTMLInputElement>) =>
						onChangePassword(e.currentTarget.value)
					}
				/>
			</>
		);
	};

	const onSubmitFailure = () => {
		setShowLoader(false);
		setShowError(true);
	};

	const navigate = useNavigate();

	const getProfileDetails = async (userID: number) => {
		const url = "https://bursting-gelding-24.hasura.app/api/rest/profile";
		const options = {
			headers: {
				"content-type": "application/json",
				"x-hasura-admin-secret":
					"g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
				"x-hasura-role": "user",
				"x-hasura-user-id": userID.toString(),
			},
			method: "GET",
		};
		const response = await fetch(url, options);
		const data = await response.json();
		const condition = response.ok === true;
		if (condition) {
			userDetails?.setProfileDetails(data.users[0]);
			navigate("/");
		} else {
			onSubmitFailure();
		}
	};

	const onSubmitSuccess = (userID: number) => {
		userDetails?.setUserId(userID);
		Cookie.set("user_id", userID.toString(), {
			expires: 15,
			path: "/",
		});
		getProfileDetails(userID);
	};

	const submitForm = async (event: React.SyntheticEvent) => {
		setShowLoader(true);
		event.preventDefault();
		const userDetails = { email: username, password: password };
		const url = "https://bursting-gelding-24.hasura.app/api/rest/get-user-id";
		const options = {
			headers: {
				"content-type": "application/json",
				"x-hasura-admin-secret":
					"g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
			},
			method: "POST",
			body: JSON.stringify(userDetails),
		};
		const response = await fetch(url, options);
		const data = await response.json();
		const condition = response.ok === true && data.get_user_id.length;
		if (condition) {
			onSubmitSuccess(data.get_user_id[0].id);
		} else {
			onSubmitFailure();
		}
	};

	return (
		<UserContext.Provider value={userDetails}>
			<MainContainer>
				<Form onSubmit={(e: React.SyntheticEvent) => submitForm(e)}>
					<InputContainer>{renderUsernameField()}</InputContainer>
					<InputContainer>
						{renderPasswordField()}
						{showError && (
							<ErrorMessage>Username or Password is Invalid</ErrorMessage>
						)}
					</InputContainer>
					<LoginButton type="submit">
						<LoaderWrap show={showLoader}>
							<ReactLoading type={"balls"} color="#fff" />
						</LoaderWrap>
						Login
					</LoginButton>
				</Form>
			</MainContainer>
		</UserContext.Provider>
	);
});

export default Login;
