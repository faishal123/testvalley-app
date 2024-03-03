"use client";
import { useState, createContext } from "react";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Shortcut from "@/components/Shortcut";
import HotDeal from "@/components/HotDeal";
import Collections from "@/components/Collections";
import { useTimedRepeatAction } from "@/utils/common";
import { ClientComponentWrapperProps } from "./types";

export const TimerContext = createContext<{ triggerTimedCallbacks: number }>({
	triggerTimedCallbacks: 0,
});

const ClientComponentWrapper: React.FC<ClientComponentWrapperProps> = ({
	banners,
	shortcuts,
	collections,
}) => {
	const [triggerTimedCallbacks, setTriggerTimedCallbacks] = useState(0);
	useTimedRepeatAction(() => {
		setTriggerTimedCallbacks((prev) => prev + 1);
	}, 3000);

	return (
		<TimerContext.Provider value={{ triggerTimedCallbacks }}>
			<Header />
			<Banner banners={banners} />
			<Shortcut shortcuts={shortcuts} />
			<HotDeal collections={collections} />
			<Collections collections={collections} />
		</TimerContext.Provider>
	);
};

export default ClientComponentWrapper;
