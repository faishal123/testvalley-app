"use client";

import { useContext, useEffect, useState } from "react";
import styles from "./ItemsScroller.module.css";
import SingleItem from "@/components/SingleItem";
import Chevron from "@/components/Chevron";
import { TimerContext } from "@/components/ClientComponentWrapper";
import { useMobile } from "@/utils/common";
import { ItemsScrollerProps } from "../types";

const initialItemsShown = 4;

const ItemsScroller: React.FC<ItemsScrollerProps> = ({ items }) => {
	const isMobile = useMobile();

	const [page, setPage] = useState(1);
	const [changedPageManually, setChangedPageManually] = useState(false);

	const itemsLength = items.length;
	const pages =
		itemsLength <= initialItemsShown ? 1 : itemsLength - initialItemsShown + 1;

	const prevPageDisabled = page <= 1;
	const nextPageDisabled = page >= pages;

	const onPrevPage = () => {
		if (!prevPageDisabled) {
			setPage((prev) => prev - 1);
		} else {
			setPage(pages);
		}
	};

	const onNextPage = () => {
		if (!nextPageDisabled) {
			setPage((prev) => prev + 1);
		} else {
			setPage(1);
		}
	};

	useEffect(() => {
		if (changedPageManually) {
			setTimeout(() => {
				setChangedPageManually(false);
			}, 3000);
		}
	}, [changedPageManually]);

	const { triggerTimedCallbacks } = useContext(TimerContext);

	useEffect(() => {
		if (!changedPageManually) {
			onNextPage();
		}
	}, [triggerTimedCallbacks]);

	const translateAmount = (174 + 8) * (page - 1);

	const renderItems = (customClassName?: string) => {
		return items.map((item) => {
			return (
				<SingleItem
					customClassName={customClassName}
					key={item.uuid}
					item={item}
				/>
			);
		});
	};

	if (isMobile) {
		return (
			<div className={styles.mobileItemsContainer}>
				{renderItems(styles.mobileItem)}
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<div
				className={styles.scrollingContainer}
				style={{ translate: `-${translateAmount}px` }}>
				{renderItems()}
			</div>
			<div
				onClick={
					prevPageDisabled
						? undefined
						: () => {
								onPrevPage();
								setChangedPageManually(true);
						  }
				}
				className={`${prevPageDisabled ? styles.disabled : ""} ${
					styles.leftChevronContainer
				}`}>
				<Chevron color="#999999" />
			</div>
			<div
				onClick={
					nextPageDisabled
						? undefined
						: () => {
								onNextPage();
								setChangedPageManually(true);
						  }
				}
				className={`${nextPageDisabled ? styles.disabled : ""} ${
					styles.rightChevronContainer
				}`}>
				<Chevron direction="right" color="#999999" />
			</div>
		</div>
	);
};

export default ItemsScroller;
