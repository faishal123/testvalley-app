"use client";

import { isObjectEmpty } from "@/utils/common";
import { HotDealProps } from "./types";
import CollectionsLayout from "../Layout/CollectionsLayout";

const HotDeal: React.FC<HotDealProps> = ({ collections }) => {
	const hotDeal = collections.items.filter(
		(item) => item.title === "HOT DEAL",
	)[0];

	if (isObjectEmpty(hotDeal || {}) || !hotDeal) return null;

	return <CollectionsLayout collection={hotDeal} />;
};

export default HotDeal;
