"use client";
import { useState, createContext, useEffect } from "react";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Shortcut from "@/components/Shortcut";
import HotDeal from "@/components/HotDeal";
import Collections from "@/components/Collections";
import { useMobile, useTimedRepeatAction } from "@/utils/common";
import MobileContainerLayout from "../Layout/MobileContainerLayout";
import ScrollToTop from "../ScrollToTop";
import { ClientComponentWrapperProps } from "./types";
import MobileNavBar from "../MobileNavBar";
import DesktopContainer from "../Layout/DesktopContainer";

export const TimerContext = createContext<{ triggerTimedCallbacks: number }>({
	triggerTimedCallbacks: 0,
});

const ClientComponentWrapper: React.FC<ClientComponentWrapperProps> = ({
	banners,
	shortcuts,
	collections,
}) => {
	const [isMounted, setIsMounted] = useState(false);
	const [triggerTimedCallbacks, setTriggerTimedCallbacks] = useState(0);

	useTimedRepeatAction(() => {
		setTriggerTimedCallbacks((prev) => prev + 1);
	}, 3000);

	useEffect(() => {
		setIsMounted(true);
	}, []);
	const isMobile = useMobile();

	if (!isMounted) {
		return null;
	}

	const childrenToRender = (
		<>
			<Header />
			<Banner banners={banners} />
			<Shortcut shortcuts={shortcuts} />
			<HotDeal collections={collections} />
			<Collections collections={collections} />
		</>
	);

	return (
		<TimerContext.Provider value={{ triggerTimedCallbacks }}>
			{isMobile ? (
				<MobileContainerLayout>
					{childrenToRender}
					<MobileNavBar />
					<ScrollToTop />
				</MobileContainerLayout>
			) : (
				<DesktopContainer>{childrenToRender}</DesktopContainer>
			)}
		</TimerContext.Provider>
	);
};

export default ClientComponentWrapper;
