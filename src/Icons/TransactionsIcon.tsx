import React from "react";

interface ColorProp {
	fillColor: string;
}

const TransactionsIcon: React.FC<ColorProp> = ({ fillColor }) => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="25"
				height="25"
				viewBox="0 0 25 25"
				fill="none"
			>
				<g clip-path="url(#clip0_1_1799)">
					<path
						d="M5.2085 22.9167C5.20915 23.469 5.42885 23.9986 5.81941 24.3891C6.20997 24.7797 6.7395 24.9994 7.29183 25H17.7085C18.2608 24.9994 18.7904 24.7797 19.1809 24.3891C19.5715 23.9986 19.7912 23.469 19.7918 22.9167V22.0052H5.2085V22.9167Z"
						fill={fillColor}
					/>
					<path
						d="M19.7918 2.08333C19.7912 1.531 19.5715 1.00148 19.1809 0.610917C18.7904 0.220358 18.2608 0.00065473 17.7085 0L7.29183 0C6.7395 0.00065473 6.20997 0.220358 5.81941 0.610917C5.42885 1.00148 5.20915 1.531 5.2085 2.08333V3.125H19.7918V2.08333Z"
						fill={fillColor}
					/>
					<path
						d="M24.7096 6.70052L21.5846 3.44531L20.0817 4.88802L21.3892 6.25H19.7915V8.33333H21.5015L20.1125 9.66459L21.5539 11.1688L24.6789 8.17396C24.7777 8.07926 24.8569 7.96602 24.9119 7.8407C24.9669 7.71538 24.9967 7.58045 24.9996 7.44361C25.0024 7.30677 24.9783 7.17071 24.9285 7.04321C24.8788 6.91571 24.8044 6.79926 24.7096 6.70052Z"
						fill={fillColor}
					/>
					<path
						d="M16.6668 6.24996H19.7918V4.16663H5.2085V16.6666H8.3335V18.75H5.2085V20.8333H19.7918V8.33329H16.6668V6.24996ZM15.6252 10.4166H11.9793C11.8412 10.4166 11.7087 10.4715 11.611 10.5692C11.5134 10.6669 11.4585 10.7993 11.4585 10.9375C11.4585 11.0756 11.5134 11.2081 11.611 11.3057C11.7087 11.4034 11.8412 11.4583 11.9793 11.4583H13.021C13.6668 11.4576 14.2898 11.697 14.7691 12.1298C15.2484 12.5627 15.5497 13.1582 15.6146 13.8007C15.6795 14.4433 15.5033 15.087 15.1203 15.607C14.7373 16.1269 14.1747 16.486 13.5418 16.6145V17.7083H11.4585V16.6666H9.37516V14.5833H13.021C13.1591 14.5833 13.2916 14.5284 13.3893 14.4307C13.487 14.3331 13.5418 14.2006 13.5418 14.0625C13.5418 13.9243 13.487 13.7919 13.3893 13.6942C13.2916 13.5965 13.1591 13.5416 13.021 13.5416H11.9793C11.3335 13.5423 10.7105 13.3029 10.2312 12.8701C9.75197 12.4372 9.45063 11.8417 9.38573 11.1992C9.32083 10.5566 9.49699 9.9129 9.88001 9.39294C10.263 8.87298 10.8256 8.51389 11.4585 8.38538V7.29163H13.5418V8.33329H15.6252V10.4166Z"
						fill={fillColor}
					/>
					<path
						d="M3.49828 16.6667L4.88734 15.3355L3.44593 13.8313L0.320931 16.8261C0.222115 16.9208 0.142929 17.034 0.0879011 17.1594C0.0328728 17.2847 0.00308028 17.4196 0.000226477 17.5564C-0.00262733 17.6933 0.0215135 17.8293 0.0712692 17.9568C0.121025 18.0843 0.19542 18.2008 0.290202 18.2995L3.4152 21.5547L4.91807 20.112L3.61064 18.75H5.2083V16.6667H3.49828Z"
						fill={fillColor}
					/>
				</g>
				<defs>
					<clipPath id="clip0_1_1799">
						<rect width="25" height="25" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</>
	);
};

export default TransactionsIcon;
