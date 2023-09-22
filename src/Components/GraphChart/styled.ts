import styled from "styled-components";

export const ChartDataWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 33px 0px 44px;
`;

export const ChartDataValue = styled.p`
    margin: 0;
    color: #333B69;
    /* font-family: Inter; */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    white-space: pre-wrap;
`;

export const ChartDataText = styled.p`
    color: #718EBF;
    /* font-family: Inter; */
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