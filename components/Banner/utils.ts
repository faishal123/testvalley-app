export const decreaseBannerIndex = (initial: number, bannerLength: number) => {
	if (initial === 0) {
		return bannerLength - 1;
	}
	return initial - 1;
};

export const increaseBannerIndex = (initial: number, bannerLength: number) => {
	if (initial + 1 === bannerLength) {
		return 0;
	}
	return initial + 1;
};

export const transitionDuration = 0.2;
