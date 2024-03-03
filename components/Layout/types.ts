import { SingleItemType } from "../HotDeal/types";
import { ReactNode } from "react";

export type CollectionsLayoutProps = {
	collection: SingleItemType;
};

export type DesktopLayoutProps = {
	children: ReactNode;
	customClassName?: string;
};
