import styles from "./Chevron.module.css";
import { ChevronProps } from "./types";

const Chevron: React.FC<ChevronProps> = ({
	size = 30,
	color = "black",
	direction = "left",
	outsideElement,
}) => {
	const chevronImage = (
		<svg
			className={styles[direction]}
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="none"
			viewBox="0 0 24 24">
			<path
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="m15 6-6 6 6 6"
			/>
		</svg>
	);
	if (!outsideElement) {
		return chevronImage;
	}

	return outsideElement(chevronImage);
};

export default Chevron;
