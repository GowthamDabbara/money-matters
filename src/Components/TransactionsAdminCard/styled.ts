import styled from "styled-components";
import { BooleanLiteral } from "typescript";

interface Admin {
    showLoader?: Boolean;
    lastCard?: boolean;
    credited?: boolean;
}


export const TransactionCard = styled.div<Admin>`
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
    width: 174px;
    color: #505887;
    /* font-family: Inter; */
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const TransactionCategory = styled.div<Admin>`
    color: #718EBF;
    /* font-family: Inter; */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    min-width: 100px;
    margin-right: 96px;
`;

export const TransactionDate = styled.div<Admin>`
    color: #718EBF;
    /* font-family: Inter; */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 131px;
    min-width: 131px;
    padding-right: 50px;
`;

export const TransactionValue = styled.div<Admin>`
    color: #FE5C73;
    text-align: right;
    /* font-family: Inter; */
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: auto;
    min-width: 63px;
    margin-right: 0;
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
    /* font-family: Inter; */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const IconWrap = styled.div`
    width: 30px;
    height: 30px;
`;
