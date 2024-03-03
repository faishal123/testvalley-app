import Image from "next/image";
import { BannerProps } from "../Desktop/types";
import { MouseEventHandler, TouchEventHandler } from "react";
import {
	transitionDuration,
	increaseBannerIndex,
	decreaseBannerIndex,
} from "../utils";
import { useWindowSize } from "@/utils/common";
import styles from "./Mobile.module.css";
import { TimerContext } from "@/components/ClientComponentWrapper";
import { useState, useEffect, useContext } from "react";
import { BannerPagination } from "../Desktop/Scroller";

const BannerMobile: React.FC<BannerProps> = ({ banners }) => {
	const { triggerTimedCallbacks } = useContext(TimerContext);
	const [touchPosition, setTouchPosition] = useState(0);
	const [isMoving, setIsMoving] = useState<boolean | "right" | "left">(false);
	const [centerBannerIndex, setCenterBannerIndex] = useState<number>(0);
	const [mouseStatus, setMouseStatus] = useState({
		isDown: false,
		coord: {
			x: 0,
			y: 0,
		},
	});

	const bannersLength = banners.length;
	const leftBannerIndex = decreaseBannerIndex(centerBannerIndex, bannersLength);
	const rightBannerIndex = increaseBannerIndex(
		centerBannerIndex,
		bannersLength,
	);

	const bannersIndexesToRender = [
		leftBannerIndex,
		centerBannerIndex,
		rightBannerIndex,
	];

	const currentImageDimension = document
		.getElementById(`banner-${centerBannerIndex}`)
		?.getBoundingClientRect();
	const windowSize = useWindowSize();
	const width = windowSize.width || 0;

	useEffect(() => {
		if (isMoving) {
			setTimeout(() => {
				if (isMoving === "left") {
					setCenterBannerIndex((prev) =>
						decreaseBannerIndex(prev, bannersLength),
					);
				}
				if (isMoving === "right") {
					setCenterBannerIndex((prev) =>
						increaseBannerIndex(prev, bannersLength),
					);
				}
				setIsMoving(false);
			}, transitionDuration * 1000);
		}
	}, [isMoving]);

	const onMouseRelease = (clientX: number) => {
		const scrollContainer = document.getElementById("scrollContainer");
		const currentImage = document.getElementById(`banner-${centerBannerIndex}`);
		if (currentImage && scrollContainer && mouseStatus.isDown) {
			const before = mouseStatus.coord.x;
			const after = clientX;
			const distance = before - after;
			if (distance > 0) {
				setIsMoving("right");
			} else {
				setIsMoving("left");
			}
			resetMouseStatus();
		} else {
			resetMouseStatus();
		}
	};

	useEffect(() => {
		setIsMoving("right");
	}, [triggerTimedCallbacks]);

	const resetMouseStatus = () => {
		if (
			mouseStatus.isDown ||
			mouseStatus.coord.x > 0 ||
			mouseStatus.coord.y > 0 ||
			touchPosition > 0
		) {
			setTouchPosition(0);
			setMouseStatus({ isDown: false, coord: { x: 0, y: 0 } });
		}
	};

	const onTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
		setMouseStatus((prev) => ({
			...prev,
			isDown: true,
			coord: {
				x: e.targetTouches[0].clientX,
				y: e.targetTouches[0].clientY,
			},
		}));
	};

	const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
		setMouseStatus((prev) => ({
			...prev,
			isDown: true,
			coord: {
				x: e.clientX,
				y: e.clientY,
			},
		}));
	};

	const onMouseMove = (clientX: number) => {
		if (mouseStatus.isDown) {
			const distance = mouseStatus.coord.x - clientX;
			const scrollContainer = document.getElementById("scrollContainer");
			if (scrollContainer) {
				scrollContainer.setAttribute("style", `translate: ${distance * -1}px`);
			}
		}
	};

	return (
		<>
			<div className={styles.container}>
				<div
					id="scrollContainer"
					className={styles.scrollContainer}
					style={{
						transition: isMoving ? `${transitionDuration}s` : "none",
						translate: !isMoving
							? "0px"
							: isMoving === "left"
							? `${(currentImageDimension?.width || 420) + 32}px`
							: `-${(currentImageDimension?.width || 420) + 32}px`,
					}}>
					{bannersIndexesToRender.map((i) => {
						const currentBanner = banners[i];
						const imageWidth = width > 420 ? 420 : width < 360 ? 360 : width;
						const imageHeight = imageWidth / 2;
						return (
							<div
								onTouchEnd={(e) => {
									onMouseRelease(touchPosition);
								}}
								onTouchMove={(e) => {
									const clientX = e.targetTouches[0].clientX;
									setTouchPosition(clientX);
									onMouseMove(clientX);
								}}
								onTouchStart={onTouchStart}
								onMouseDown={onMouseDown}
								onMouseLeave={(e) => {
									onMouseRelease(e.clientX);
								}}
								onMouseUp={(e) => {
									onMouseRelease(e.clientX);
								}}
								onMouseMove={(e) => {
									onMouseMove(e.clientX);
								}}
								style={{
									width: `${imageWidth}px`,
									height: `${imageHeight}px`,
								}}
								className={`positionRelative`}
								key={currentBanner.mainBannerId}>
								<Image
									id={`banner-${i}`}
									draggable={false}
									layout="fill"
									sizes="(max-width: 960px) 420px, (max-width: 420px) 100vw"
									src={currentBanner.mobileImageUrl}
									alt={`${currentBanner.mainBannerId}`}
								/>
							</div>
						);
					})}
				</div>
				<BannerPagination
					bannerLength={bannersLength}
					activeIndex={centerBannerIndex}
				/>
			</div>
		</>
	);
};

export default BannerMobile;
