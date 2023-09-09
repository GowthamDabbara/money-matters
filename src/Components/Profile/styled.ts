import styled from "styled-components";

export const MainSection = styled.div`
	background-color: white;
    display: flex;
    height: auto;
`;

export const MainContainer = styled.div`
    height: auto;
    width: 79%;
    margin-left: auto;
    background: #F5F7FA;
`;

export const TopBarWrap = styled.div`
    height: 84px;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    background: #fff;
`;

export const TopBar = styled.div`
    height: 84px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
`;

export const TopBarTitle = styled.div`
    color: #343C6A;
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const TransactionBtn = styled.button`
    border-style: none;
    display: flex;
    padding: 8px 12px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 12px;
    background: #2D60FF;
    color: #FFF;
    text-align: center;
    cursor: pointer;

    /* Button 2 Medium 15p */
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const Main = styled.div`
	margin: 0 40px;
    min-height: ${window.innerHeight - 118 + `px`};
    /* width: 79%; */
`;

export const MiddleWrap = styled.div`
	display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 25px;
    background: #FFF;
    margin: 32px 0 32px 0;
    position: relative;
`;

interface BtnProps {
    active: boolean
}

export const Card = styled.div`
	display: flex;
    margin: 48px 30px 48px 215px;
`;

export const ProfilePic = styled.div`
	position: absolute;
    display: flex;
    width: 120px;
    height: 120px;
    border-radius: 200px;
    flex-shrink: 0;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
    top: 45px;
    left: 30px;
`;

export const Form = styled.form`
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
    column-gap: 10px;
    /* @media (max-width: 769px) {
		justify-content: start;
		height: auto;
	} */
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 27px;
	/* width: 360px; */
	/* @media (max-width: 769px) {
		width: 312px;
		padding-bottom: 19px;
	} */
`;

export const InputLabel = styled.label`
	padding-bottom: 12px;
    color: #505887;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const UserInpField = styled.input`
	-webkit-appearance: none;
	background: transparent;
	padding-left: 20px;
	&:active {
		outline: none !important;
	}
	&:focus {
		outline: none !important;
	}
    max-width: 418px;
    min-width: 340px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 15px;
    border: 1px solid #DFEAF2;
    background: #FFF;
    color: #718EBF;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
