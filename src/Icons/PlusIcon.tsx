import React from "react";

interface ColorProp {
	fillColor: string;
}

const PlusIcon: React.FC<ColorProp> = ({ fillColor }) => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
			>
				<path
					d="M9.99984 4.16663V15.8333M4.1665 9.99996H15.8332"
					stroke={fillColor}
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</>
	);
};

export default PlusIcon;
