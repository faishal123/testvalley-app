import DesktopLayout from "../DesktopLayout";
import SingleItem from "@/components/SingleItem";
import ItemsScroller from "@/components/HotDeal/ItemsScroller";
import styles from "./CollectionsLayout.module.css";
import { CollectionsLayoutProps } from "../types";

const CollectionsLayout: React.FC<CollectionsLayoutProps> = ({
	collection,
}) => {
	return (
		<DesktopLayout customClassName={styles.containerWithMargin}>
			<div className={`positionRelative ${styles.collectionsContainer}`}>
				<div className={styles.titleContainer}>
					<h2>{collection.title}</h2>
					<h5 className={styles.subtitle}>{collection.subtitle}</h5>
				</div>
				<ItemsScroller items={collection.items} />
			</div>
		</DesktopLayout>
	);
};

export default CollectionsLayout;
