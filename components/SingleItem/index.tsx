import Image from "next/image";
import { currencyFormatter } from "@/utils/common";
import Tag from "../Tag";
import TagOnImage from "../TagOnImage";
import TagPreface from "../TagPreface";
import styles from "./SingleItem.module.css";
import { SingleItemProps } from "./types";

const redColoredTags = ["단독특가", "한정수량", "깜짝할인"];

const SingleItem: React.FC<SingleItemProps> = ({ item }) => {
	const discountRate =
		item.publication.priceInfo.couponDiscountRate ||
		item.publication.priceInfo.discountRate;

	const price =
		item.publication.priceInfo.couponDiscountPrice ||
		item.publication.priceInfo.discountPrice;

	const discountRemaining = item?.publication?.discounts?.[0]?.remain;
	const prefaceTitle = item?.publication?.preface;
	const prefaceIcon = item?.publication?.prefaceIconUrl;
	return (
		<div className={"cursorPointer positionRelative"} key={item.uuid}>
			<Image
				className={styles.itemImage}
				alt={item.uuid}
				src={item.publication.media[0].uri}
				width={174}
				height={174}
			/>
			<TagOnImage
				icon="https://www.testvalley.kr/common/return-new.svg"
				title={item?.publication?.tagsOnImage?.[0]}
			/>
			<div className={styles.itemTitle}>{item.publication.title}</div>
			<div>
				{discountRate && (
					<span className={styles.discountRate}>{discountRate}%</span>
				)}
				<span className={styles.price}>
					{currencyFormatter.format(price || 0)}
				</span>
				<span className={styles.currency}>원</span>
			</div>
			<div className={styles.tagsContainer}>
				{item.publication.tagsOnDesc.map((tag) => {
					const isRedTag = redColoredTags.includes(tag);
					return (
						<Tag key={tag} color={isRedTag ? "red" : "default"} title={tag} />
					);
				})}
			</div>
			<div className={styles.ratingContainer}>
				<div className={styles.rating}>
					<Image
						src={"https://www.testvalley.kr/star/star-darkgray.svg"}
						alt="rating"
						width={12}
						height={12}
					/>
					{item.publication.rating}
				</div>
				{!!discountRemaining && (
					<>
						<span>|</span>
						<>한정수량{discountRemaining}개</>
					</>
				)}
			</div>
			{prefaceIcon && prefaceTitle && (
				<TagPreface icon={prefaceIcon} title={prefaceTitle} />
			)}
		</div>
	);
};

export default SingleItem;
