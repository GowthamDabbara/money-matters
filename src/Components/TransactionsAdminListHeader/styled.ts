import styled from "styled-components";

export const TransactionCard = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 58px;
    flex-shrink: 0;
    border-bottom: 1px solid #E2E2E2;
`;

export const TransactionTitle = styled.div`
    margin-left: 16px;
    margin-right: 80px;
    width: 174px;
    color: #343C6A;
    /* font-family: Inter; */
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

`;

export const TransactionCategory = styled.div`
    min-width: 100px;
    margin-right: 96px;
    color: #343C6A;
    /* font-family: Inter; */
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const TransactionDate = styled.div`
    width: 131px;
    min-width: 131px;
    padding-right: 50px;
    color: #343C6A;
    /* font-family: Inter; */
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const TransactionValue = styled.div`
    text-align: right;
    margin: auto;
    min-width: 63px;
    margin-right: 0;
    color: #343C6A;
    /* font-family: Inter; */
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const EmptyDiv = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    width: 191px;
    min-width: 80px;
    margin-left: 54px;
    margin-right: 89px;
`;

export const CardUserName = styled.div`
    position: absolute;
    color: #343C6A;
    /* font-family: Inter; */
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;