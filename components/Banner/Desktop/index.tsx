"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Scroller from "./Scroller";
import { BannerProps } from "./types";
import {
	transitionDuration,
	decreaseBannerIndex,
	increaseBannerIndex,
} from "../utils";
import styles from "./Banner.module.css";

const Banner: React.FC<BannerProps> = ({ banners }) => {
	const [centerBannerIndex, setCenterBannerIndex] = useState<number>(0);
	const [isMoving, setIsMoving] = useState<boolean | "right" | "left">(false);
	const bannerLength = banners.length;

	const leftBannerIndex = decreaseBannerIndex(centerBannerIndex, bannerLength);
	const leftBufferBannerIndex = decreaseBannerIndex(
		leftBannerIndex,
		bannerLength,
	);
	const rightBannerIndex = increaseBannerIndex(centerBannerIndex, bannerLength);
	const rightBufferBannerIndex = increaseBannerIndex(
		rightBannerIndex,
		bannerLength,
	);
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
					id="bannerMovingContainer"
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
					setCenterBannerIndex={setCenterBannerIndex}
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
