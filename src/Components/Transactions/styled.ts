import styled from "styled-components";

interface Admin {
    admin?: boolean;
    lastCard?: boolean;
    header?: boolean;
}

interface Credited {
    credited: boolean
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
    min-height: ${window.innerHeight - 100 + `px`};
    /* width: 79%; */
`;

export const TopWrap = styled.div`
	display: flex;
    gap: 24px;
`;

export const MiddleWrap = styled.div`
	display: flex;
    padding: 0px 25px 0px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 25px;
    background: #FFF;
    margin: 32px 0 32px 0;
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

export const CardBalanceText = styled.h4<Credited>`
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

export const EmptyDiv = styled.div`
    display: flex;
    margin-left: auto;
    min-width: 60px;
    height: auto;
`; 

export const TransactionCard = styled.div<Admin>`
    display: flex;
    align-items: center;
    width: 100%;
    height: 58px;
    flex-shrink: 0;
    border-bottom: ${(props) => (props.lastCard ? "none" : 1 + `px solid #E2E2E2`)};
`;

export const TransactionCardHead = styled.div<Admin>`
    display: flex;
    align-items: center;
    width: 100%;
    height: 58px;
    flex-shrink: 0;
    border-bottom: ${(props) => (props.lastCard ? "none" : 1 + `px solid #E2E2E2`)};
`;

export const TransactionTitle = styled.div<Admin>`
    margin-left: 16px;
    margin-right: 80px;
    width: ${(props) => (props.admin ? 174 + `px` : 317 + `px`)};
    /* max-width: ${(props) => (props.admin ? 174 + `px` : 317 + `px`)}; */
    /* min-width: ${(props) => (props.admin ? 150 + `px` : 250 + `px`)}; */
    color: #505887;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const TransactionTitleHead = styled.div<Admin>`
    /* margin-left: 16px; */
    margin-right: 80px;
    width: ${(props) => (props.admin ? 174 + 46 + `px` : 317 + 46 + `px`)};
    /* max-width: ${(props) => (props.admin ? 174 + `px` : 317 + `px`)};
    min-width: ${(props) => (props.admin ? 150 + `px` : 317 + `px`)}; */
    color: #505887;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const TransactionCategory = styled.div<Admin>`
    color: ${(props) => (props.header ? "#343C6A" : "#718EBF")};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: ${(props) => (props.header ? 500 : 400)};
    line-height: normal;
    min-width: 100px;
    margin-right: 96px;
`;

export const TransactionDate = styled.div<Admin>`
    color: ${(props) => (props.header ? "#343C6A" : "#718EBF")};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: ${(props) => (props.header ? 500 : 400)};
    line-height: normal;
    width: 131px;
    min-width: 131px;
    padding-right: 50px;
`;

export const TransactionValue = styled.div<Admin>`
    color: ${(props) => (props.header ? "#343C6A" : "#FE5C73")};
    text-align: right;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: auto;
    min-width: 63px;
    margin-right: ${(props) => (props.admin ? 0 : 80 + `px`)};
`;

export const TransactionValueHead = styled.div<Admin>`
    color: #343C6A;
    text-align: right;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: auto;
    min-width: 63px;
    margin-right: ${(props) => (props.admin ? 0 : 80 + `px`)};
`;

export const EditIconWrap = styled.div`
    display: flex;
    margin: auto;
    margin-right: 20px;
`;

export const EditIconWrapHead = styled.div`
    display: flex;
    margin: auto;
    margin-right: 20px;
    width: 20px;
`;

export const DeleteIconWrap = styled.div`
    display: flex;
`;

export const DeleteIconWrapHead = styled.div`
    display: flex;
    width: 20px;
`;

export const CardProfileWrap = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    width: 191px;
    margin-left: 24px;
    margin-right: 89px;
`;

export const CardDP = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

export const CardUserName = styled.div`
    color: #505887;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const IconWrap = styled.div`
    width: 30px;
    height: 30px;
`;

export const ChartDataWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 33px 0px 44px;
`;

export const ChartDataValue = styled.p`
    margin: 0;
    color: #333B69;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    white-space: pre-wrap;
`;

export const ChartDataText = styled.p`
    color: #718EBF;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    white-space: pre-wrap;
`;

export const ChartTextWrap = styled.div`
    display: flex;
    align-items: center;
`;

export const DebitBox = styled.div`
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #4C78FF;
    box-shadow: 0px 0px 15px 0px rgba(17, 52, 133, 0.50) inset;
`;

export const CreditBox = styled.div`
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #FCAA0B;
    box-shadow: 0px 0px 15px 0px rgba(172, 13, 108, 0.50) inset;
`;