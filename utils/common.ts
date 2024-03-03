import { useState, useEffect } from "react";

export const useWindowSize = () => {
	const isClient = typeof window === "object";
	const [windowSize, setWindowSize] = useState({
		width: isClient ? window.innerWidth : undefined,
		height: isClient ? window.innerHeight : undefined,
	});

	function handleResize() {
		setWindowSize({
			width: isClient ? window.innerWidth : undefined,
			height: isClient ? window.innerHeight : undefined,
		});
	}

	useEffect(() => {
		if (!isClient) {
			console.error("no client");
		} else {
			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}
	}, [isClient]);

	return windowSize;
};

export const useMobile = () => {
	return (useWindowSize()?.width || 0) <= 960;
};

export const useTimedRepeatAction = (cb: () => void, interval: number) => {
	const [currentTime, setCurrentTime] = useState(0);
	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrentTime((prev) => prev + 3);
		}, interval);
		return () => {
			clearTimeout(timer);
		};
	});

	useEffect(() => {
		if (currentTime > 0) {
			cb();
		}
	}, [currentTime]);
};

export const isObjectEmpty = (object: Record<any, any>) => {
	return Object.keys(object).length === 0;
};

export const currencyFormatter = new Intl.NumberFormat();
