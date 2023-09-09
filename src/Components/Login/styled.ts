import styled from "styled-components";

export const MainContainer = styled.div`
	background-color: white;
	height: auto;
`;

export const Form = styled.form`
	height: 484px;
	width: 499px;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	@media (max-width: 769px) {
		justify-content: start;
		height: auto;
	}
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 27px;
	width: 360px;
	@media (max-width: 769px) {
		width: 312px;
		padding-bottom: 19px;
	}
`;

interface LoaderProp {
    show: boolean
}

export const LoaderWrap = styled.div<LoaderProp>`
    display: ${(props) => props.show ? "flex" : "none"};
    justify-content: center;
`;

export const LoginButton = styled.button`
	background-color: #0284c7;
	border: none;
	width: 360px;
	height: 56px;
	font-size: 18px;
	margin-top: 5px;
	line-height: 22px;
	color: white;
	border-radius: 8px;
	font-weight: 700;
	cursor: pointer;
	@media (max-width: 769px) {
		width: 312px;
		height: 40px;
	}
`;

export const ErrorMessage = styled.p`
	margin: 0px;
	color: red;
	font-size: 14px;
	padding-top: 5px;
`;

export const InputLabel = styled.label`
	color: #5a7184;
	padding-bottom: 12px;
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: 19px;
`;

export const UserInpField = styled.input`
	-webkit-appearance: none;
	height: 56px;
	font-size: 16px;
	background: transparent;
	padding-left: 20px;
	color: #183b56;
	border: 1px solid #c3cad9;
	border-radius: 8px;
	&:active {
		outline: none !important;
	}
	&:focus {
		outline: none !important;
	}
`;
