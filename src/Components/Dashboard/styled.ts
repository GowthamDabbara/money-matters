import styled from "styled-components";

interface Admin {
    admin?: boolean;
    lastCard?: boolean;
    header?: boolean;
    credited?: boolean
}

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

export const TopBar = styled.div`
    height: 84px;
    padding: 0 40px;
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
    /* width: 79%; */
`;

export const TopWrap = styled.div`
	display: flex;
    gap: 24px;
`;

export const MiddleWrap = styled.div`
	display: flex;
    /* width: 1110px; */
    /* height: 210px; */
    padding: 0px 25px 0px 24px;
    flex-direction: column;
    /* justify-content: flex-end; */
    align-items: flex-start;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 25px;
    background: #FFF;
`;

export const BottomWrap = styled.div`
	border-radius: 25px;
    background: #FFF;
    margin-bottom: 40px;
    height: auto;
`;

export const DataTitle = styled.div`
	color: #333B69;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 24px;
    margin-bottom: 16px;
`;

export const CardWrap = styled.div`
	display: flex;
    width: 42%;
    height: 118px;
    padding: 25px 36px;
    padding-right: 0;
    flex-direction: row;
    justify-content: space-between;
    align-self: flex-start;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 25px;
    background: #FFF;
    margin-top: 24px;
    flex: 1;
`;

export const CardBalanceText = styled.h4<Admin>`
    margin: 0;
	color: ${(props) => (props.credited ? "#16DBAA" : "#FE5C73")};
    font-family: Inter;
    font-size: ${(props) => (props.credited ? 32+`px` : 25+`px`)};;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const CardTypeText = styled.p`
    margin: 0;
	color: #718EBF;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Logo = styled.img`
    width: 182.431px;
    height: 161px;
    margin-top: 7px;
    align-self: center;
    @media (max-width: 769px) {
		width: 92px;
		height: 24px;
	}
`;
