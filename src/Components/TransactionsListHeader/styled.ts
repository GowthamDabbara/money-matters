import styled from "styled-components";

interface Admin {
    admin?: boolean;
    lastCard?: boolean;
    header?: boolean;
}

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

export const TransactionTitle = styled.div<Admin>`
    /* margin-left: 16px; */
    margin-right: 80px;
    width: ${(props) => (props.admin ? 174 + 46 + `px` : 317 + 46 + `px`)};
    /* max-width: ${(props) => (props.admin ? 174 + `px` : 317 + `px`)};
    min-width: ${(props) => (props.admin ? 150 + `px` : 317 + `px`)}; */
    color: #343C6A;
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


