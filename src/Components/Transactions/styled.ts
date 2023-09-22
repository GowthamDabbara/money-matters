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

export const TopBarWrap = styled.div`
    height: 115px;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    background: #fff;
`;

export const TopBar = styled.div`
    height: 115px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
`;

export const TopBarTitle = styled.div`
    color: #343C6A;
    /* font-family: Inter; */
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
    /* font-family: Inter; */
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const Main = styled.div`
	margin: 0 40px;
    min-height: ${window.innerHeight - 150 + `px`};
    /* width: 79%; */
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

interface BtnProps {
    active: boolean
}

export const FilterBtn = styled.button<BtnProps>`
    margin-right: 10px;
    height: 30px;
    border: none;
    color: ${(props) => (props.active ? "#2D60FF" : "#718EBF")};
    /* font-family: Inter; */
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background: transparent;
    cursor: pointer;
    border-bottom: ${(props) => (props.active ? "3px solid" : "none")};
    border-radius: 0px 0px 1.5px 1.5px;
`;