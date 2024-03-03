import { ReactElement } from "react";

export type ChevronProps = {
	size?: number;
	width?: number;
	color?: string;
	direction?: "left" | "right" | "up" | "down";
	outsideElement?: (children?: ReactElement) => ReactElement;
};
