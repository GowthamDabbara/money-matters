import styled from "styled-components";

export const Main = styled.div`
width: 591px;
height: 188px;
flex-shrink: 0;
border-radius: 16px;
background: #FFF;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* Shadow / lg */
box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10);
`;

export const Title = styled.h4`
margin: 0;
color: #333B69;
/* font-family: Inter; */
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 28px; /* 140% */
margin-bottom: 8px;;
`;

export const Description = styled.p`
margin: 0;
color: #505887;
/* font-family: Inter; */
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
`;

export const BtnsWrap = styled.div`
display: flex;
gap: 5px;
margin-top: 32px;
`;

export const LogoutBtn = styled.button`
display: flex;
padding: 8px 16px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 8px;
background: #DC2626;
color: #FFF;
text-align: center;
cursor: pointer;

/* text-sm / leading-5 / font-medium */
/* font-family: Inter; */
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 142.857% */
border: none;
`;

export const CancelBtn = styled.button`
border: none;
cursor: pointer;
display: flex;
padding: 8px 16px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 8px;
border: 1px solid #CBD5E1;
background: #FFF;
color: #333B69;
text-align: center;

/* text-sm / leading-5 / font-medium */
/* font-family: Inter; */
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 142.857% */
`;
