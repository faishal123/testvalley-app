"use client";
import {
	ReactElement,
	Dispatch,
	SetStateAction,
	useState,
	useContext,
	useEffect,
} from "react";
import styles from "./Scroller.module.css";
import { ChevronContainerProps, ScrollerProps } from "../types";
import Chevron from "@/components/Chevron";
import { TimerContext } from "@/components/ClientComponentWrapper";

const ChevronContainer: React.FC<ChevronContainerProps> = ({
	children,
	customClassName,
	onClick,
	isDisabled,
}) => {
	return (
		<div
			onClick={!isDisabled && onClick ? onClick : undefined}
			className={`${customClassName} ${styles.chevronContainer}`}>
			{children}
		</div>
	);
};

const CirclePagination = ({ isActive }: { isActive?: boolean }) => {
	return (
		<div
			className={`${!isActive ? styles.circlePaginationInactive : ""} ${
				styles.circlePagination
			}`}></div>
	);
};

const BannerPagination = ({
	bannerLength,
	activeIndex,
}: {
	bannerLength: number;
	activeIndex: number;
}) => {
	return (
		<div className={styles.bannerPagination}>
			{Array.from(new Array(bannerLength)).map((_, i) => (
				<CirclePagination key={i} isActive={i === activeIndex} />
			))}
		</div>
	);
};

const Scroller: React.FC<ScrollerProps> = ({
	isMoving,
	setIsMoving,
	bannerLength,
	centerBannerIndex,
	setCenterBannerIndex,
	transitionDuration,
	decreaseBannerIndex,
	increaseBannerIndex,
}) => {
	const [isHovering, setIsHovering] = useState(false);
	const onClickLeftChevron = () => {
		setIsMoving("left");
	};
	const onClickRightChevron = () => {
		setIsMoving("right");
	};

	const { triggerTimedCallbacks } = useContext(TimerContext);

	useEffect(() => {
		if (!isHovering) {
			onClickRightChevron();
		}
	}, [triggerTimedCallbacks]);

	useEffect(() => {
		if (isMoving) {
			setTimeout(() => {
				if (isMoving === "left") {
					setCenterBannerIndex((prev) => decreaseBannerIndex(prev));
				}
				if (isMoving === "right") {
					setCenterBannerIndex((prev) => increaseBannerIndex(prev));
				}
				setIsMoving(false);
			}, transitionDuration * 1000);
		}
	}, [isMoving]);

	useEffect(() => {}, [centerBannerIndex, isHovering]);

	return (
		<div className={styles.scrollerContainer}>
			<div className={styles.whiteOverlay}></div>
			<div
				className={styles.centerOverlay}
				onMouseLeave={() => {
					setIsHovering(false);
				}}
				onMouseEnter={() => {
					setIsHovering(true);
				}}>
				<Chevron
					color="white"
					outsideElement={(children) => {
						return (
							<ChevronContainer
								isDisabled={!!isMoving}
								onClick={onClickLeftChevron}
								customClassName={styles.leftChevron}>
								{children}
							</ChevronContainer>
						);
					}}
				/>
				<Chevron
					direction="right"
					color="white"
					outsideElement={(children) => {
						return (
							<ChevronContainer
								isDisabled={!!isMoving}
								onClick={onClickRightChevron}
								customClassName={styles.rightChevron}>
								{children}
							</ChevronContainer>
						);
					}}
				/>
				<BannerPagination
					bannerLength={bannerLength}
					activeIndex={centerBannerIndex}
				/>
			</div>
			<div className={styles.whiteOverlay}></div>
		</div>
	);
};

export default Scroller;
