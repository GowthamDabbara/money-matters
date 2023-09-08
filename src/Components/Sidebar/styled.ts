import styled from "styled-components";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export const StyledPopup = styled(Popup)`
    display: none;
    &-overlay {
        height: ${window.innerHeight - 1 + `px`};;
        /* background: transparent; */
        backdrop-filter: blur(0px);
    }
    &-content {
        margin: 0;
        padding: 0;
        width: 591px;
        height: 188px;
        flex-shrink: 0;
        border-radius: 16px;
        /* background: transparent; */
    }
`

export const MainContainer = styled.div`
    flex-shrink: 0;
    border-right: 1px solid #E2E2E2;
    background: #FFF;
    height: 100%;
    min-width: 21%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
`;

export const TopPart = styled.div`
    color: black;
`;

export const BottomPart = styled.div`
    color: black;
`;

export const Logo = styled.img`
    margin-top: 31px;
    margin-left: 20px;
    margin-right: 21px;
	width: 209px;
	height: 38px;
	@media (max-width: 769px) {
		width: 92px;
		height: 24px;
	}
`;

export const NavTabs = styled.div`
    color: black;
    margin-top: 45px;
`;

interface ActiveProp {
    active?: Boolean
}

export const Tab = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    width: auto;
`;

export const LeftBar = styled.div<ActiveProp>`
    display: ${(props) => (props.active ? "block" : "none")};
    width: 6px;
    height: 60px;
    background: #2D60FF;
    border-radius: 0px 10px 10px 0px;
    position: absolute;
`;

export const Icon = styled.div<ActiveProp>`
    margin-left: ${(props) => (props.active ? 38+`px` : 44+`px`)};
    margin-right: 26px;
    width: auto;
`;
export const Title = styled.div<ActiveProp>`
    color: ${(props) => (props.active ? "#2D60FF" : "#505887")};
    font-weight: 500;
`;

export const Footer = styled.div`
    height: 106px;
    padding-left: 24px;
    display: flex;
    align-items: center;
    border-top: 1px solid #EAECF0;
`;

export const ProfilePic = styled.div`
    margin-right: 8px;
    display: flex;
    width: 40px;
    height: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 200px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

export const ProfileDetails = styled.div`
    height: auto;
    position: relative;
`;

export const Name = styled.div`
    color: #505887;

    /* Text sm / Semibold */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 142.857% */
`;

export const Mail = styled.div`
    color: #718EBF;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
`;

export const LogoutIconWrap = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 142px;
    width: 20px;
    height: 20px;
`;
