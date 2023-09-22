import styled from "styled-components";

interface Admin {
    lastCard?: boolean;
    credited?: boolean;
    showLoader?: boolean;
}

export const TransactionCard = styled.div<Admin>`
    display: ${(props) => (props.showLoader ? "block" : "flex")};
    align-items: center;
    width: 100%;
    height: 58px;
    flex-shrink: 0;
    border-bottom: ${(props) => (props.lastCard ? "none" : 1 + `px solid #E2E2E2`)};
`;

export const TransactionTitle = styled.div<Admin>`
    margin-left: 16px;
    margin-right: 80px;
    width: 317px;
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
    margin-right: 80px;
`;

export const EditIconWrap = styled.div`
    display: flex;
    margin: auto;
    margin-right: 20px;
`;

export const DeleteIconWrap = styled.div`
    display: flex;
`;

export const IconWrap = styled.div`
    width: 30px;
    height: 30px;
`;
