"use client";
import CollectionsLayout from "../Layout/CollectionsLayout";
import { CollectionProps } from "./types";

const Collections: React.FC<CollectionProps> = ({ collections }) => {
	const collectionsToRender = collections.items.filter(
		(item) =>
			item.type === "SINGLE" &&
			item.viewType === "TILE" &&
			item.title !== "HOT DEAL",
	);
	return (
		<>
			{collectionsToRender.map((collection) => (
				<CollectionsLayout key={collection.id} collection={collection} />
			))}
		</>
	);
};

export default Collections;
