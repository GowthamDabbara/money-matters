import React from "react";

interface ColorProp {
	fillColor: string;
}

const DownArrowIcon: React.FC<ColorProp> = ({ fillColor }) => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="30"
				height="30"
				viewBox="0 0 30 30"
				fill="none"
			>
				<circle cx="15" cy="15" r="14" stroke={fillColor} stroke-width="2" />
				<path
					d="M14.4697 21.5303C14.7626 21.8232 15.2374 21.8232 15.5303 21.5303L20.3033 16.7574C20.5962 16.4645 20.5962 15.9896 20.3033 15.6967C20.0104 15.4038 19.5355 15.4038 19.2426 15.6967L15 19.9393L10.7574 15.6967C10.4645 15.4038 9.98959 15.4038 9.6967 15.6967C9.40381 15.9896 9.40381 16.4645 9.6967 16.7574L14.4697 21.5303ZM14.25 10.5L14.25 21L15.75 21L15.75 10.5L14.25 10.5Z"
					fill={fillColor}
				/>
			</svg>
		</>
	);
};

export default DownArrowIcon;
