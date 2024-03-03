"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Scroller from "./Scroller";
import { BannerProps } from "./types";
import styles from "./Banner.module.css";

const transitionDuration = 0.2;

const Banner: React.FC<BannerProps> = ({ banners }) => {
	const [centerBannerIndex, setCenterBannerIndex] = useState<number>(0);
	const [isMoving, setIsMoving] = useState<boolean | "right" | "left">(false);

	const bannerLength = banners.length;

	const decreaseBannerIndex = (initial: number) => {
		if (initial === 0) {
			return bannerLength - 1;
		}
		return initial - 1;
	};

	const increaseBannerIndex = (initial: number) => {
		if (initial + 1 === bannerLength) {
			return 0;
		}
		return initial + 1;
	};

	const leftBannerIndex = decreaseBannerIndex(centerBannerIndex);
	const leftBufferBannerIndex = decreaseBannerIndex(leftBannerIndex);
	const rightBannerIndex = increaseBannerIndex(centerBannerIndex);
	const rightBufferBannerIndex = increaseBannerIndex(rightBannerIndex);
	const bannersIndexesToRender = [
		leftBufferBannerIndex,
		leftBannerIndex,
		centerBannerIndex,
		rightBannerIndex,
		rightBufferBannerIndex,
	];

	if (banners.length <= 0) {
		return null;
	}

	return (
		<>
			<div className={styles.bannersContainer}>
				<div
					className={styles.movingContainer}
					style={{
						transition: isMoving ? `${transitionDuration}s` : "none",
						translate: `calc(-50% ${
							!isMoving ? "+ 0" : isMoving === "left" ? "+ 992" : "- 992"
						}px)`,
					}}>
					{bannersIndexesToRender.map((bannerIndex) => (
						<Image
							key={banners[bannerIndex].title}
							id={banners[bannerIndex].title}
							src={banners[bannerIndex].pcImageUrl}
							alt={banners[bannerIndex].title}
							width={960}
							height={320}
						/>
					))}
				</div>
				<Scroller
					transitionDuration={transitionDuration}
					setCenterBannerIndex={setCenterBannerIndex}
					decreaseBannerIndex={decreaseBannerIndex}
					increaseBannerIndex={increaseBannerIndex}
					isMoving={isMoving}
					setIsMoving={setIsMoving}
					bannerLength={bannerLength}
					centerBannerIndex={centerBannerIndex}
				/>
			</div>
		</>
	);
};

export default Banner;
