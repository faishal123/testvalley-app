import DesktopLayout from "../DesktopLayout";
import ItemsScroller from "@/components/HotDeal/ItemsScroller";
import { useMobile } from "@/utils/common";
import styles from "./CollectionsLayout.module.css";
import { CollectionsLayoutProps } from "../types";

const CollectionsLayout: React.FC<CollectionsLayoutProps> = ({
	collection,
}) => {
	const isMobile = useMobile();

	const renderChildren = () => {
		return (
			<div className={`positionRelative ${styles.collectionsContainer}`}>
				<div className={styles.titleContainer}>
					<h2>{collection.title}</h2>
					<h5 className={styles.subtitle}>{collection.subtitle}</h5>
				</div>
				<ItemsScroller items={collection.items} />
			</div>
		);
	};

	if (isMobile) {
		return <div className={styles.mobileContainer}>{renderChildren()}</div>;
	}

	return (
		<DesktopLayout customClassName={styles.containerWithMargin}>
			{renderChildren()}
		</DesktopLayout>
	);
};

export default CollectionsLayout;
