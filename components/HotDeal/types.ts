export type ItemsScrollerProps = {
	items: SingleItemInsideItemType[];
};

type SingleMediaType = {
	collectionId?: number;
	createdAt?: string;
	deletedAt?: string | number | null;
	deviceType: string | number | null;
	fileName?: string;
	itemKey?: string | number | null;
	mimeType: string;
	objectKey?: string;
	seq: number;
	type: string;
	updatedAt?: string;
	uri: string;
	uuid?: string;
};

type SingleDiscountType = {
	activeFrom: null | string;
	activeTo: null | string;
	calcMethod: string;
	id: number;
	name: null | string;
	qty: number;
	remain: null | string;
	type: string;
	value: number;
};

export type SingleItemInsideItemType = {
	body: null | string;
	collectionId: number;
	createdAt: string;
	deletedAt: null | string;
	entityId: number;
	entityType: string;
	key: string;
	name: string;
	optionKey: null | string | number;
	prdType: number;
	seq: number;
	updatedAt: string;
	uuid: string;
	publication: {
		applyCoupon: boolean;
		brandName: string;
		code: string;
		content: string;
		detailEntry: string;
		id: number;
		isAdult: number;
		isExistResidual: boolean;
		isTrial: boolean;
		offeringType: string;
		prdType: number;
		preface: string;
		prefaceIconUrl: string;
		productId: number;
		productName: string;
		rating: number;
		title: string;
		discounts: SingleDiscountType[];
		media: SingleMediaType[];
		priceInfo: {
			couponDiscountPrice?: number;
			couponDiscountRate?: number;
			discountPrice?: number;
			discountRate?: number;
			price?: number;
		};
		tagsOnDesc: string[];
		tagsOnImage: string[];
	};
};

type SingleTagType = {
	tag: {
		code: string;
		createdAt: string;
		deletedAt: null | string;
		description: null | string;
		id: number;
		name: string;
		type: string;
		updatedAt: string;
	};
	collectionId: number;
	createdAt: string;
	deletedAt: null | string;
	isOpen: boolean;
	tagId: number;
	updatedAt: string;
};

export type SingleItemType = {
	code: string;
	createdAt: string;
	description: string;
	endDate: string | null;
	id: number;
	installmentPeriod: number | null;
	installmentPrice: number | null;
	media: SingleMediaType[];
	items: SingleItemInsideItemType[];
	rating: number;
	singleCollections?: any[];
	startDate: string | null;
	subtitle: string;
	taggings: SingleTagType[];
	title: string;
	trialPeriod: number | null;
	type: string;
	viewType: string;
};

export type CollectionsResponse = {
	items: SingleItemType[];
	totalData: number;
};

export type HotDealProps = {
	collections: CollectionsResponse;
};
