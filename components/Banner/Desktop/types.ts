import { ReactElement, Dispatch, SetStateAction } from "react";

export type BannerType = {
	createdAt: string;
	creator: string;
	deletedAdd: string | null;
	deleter: string | null;
	endDate: string;
	linkUrl: string;
	mainBannerId: number;
	mobileImageUrl: string;
	pcImageUrl: string;
	sort: number;
	startDate: string;
	title: string;
	updatedAt: string | null;
	updater: string | null;
};

export type ChevronContainerProps = {
	children?: ReactElement;
	customClassName?: string;
	onClick?: () => void;
	isDisabled?: boolean;
};

export type ScrollerProps = {
	isMoving: boolean | "right" | "left";
	setIsMoving: Dispatch<SetStateAction<boolean | "right" | "left">>;
	bannerLength: number;
	centerBannerIndex: number;
	setCenterBannerIndex: Dispatch<SetStateAction<number>>;
};

export type BannerProps = {
	banners: BannerType[];
};
