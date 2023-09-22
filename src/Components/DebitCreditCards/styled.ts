import styled from "styled-components";

interface Admin {
    admin?: boolean;
    lastCard?: boolean;
    header?: boolean;
    credited?: boolean
}

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
    /* font-family: Inter; */
    font-size: ${(props) => (props.credited ? 32+`px` : 25+`px`)};;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const CardTypeText = styled.p`
    margin: 0;
	color: #718EBF;
    /* font-family: Inter; */
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
