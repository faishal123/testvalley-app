import Head from "next/head";
import { CollectionsResponse } from "@/components/HotDeal/types";
import { ShortcutType } from "@/components/Shortcut/types";
import { BannerType } from "@/components/Banner/types";
import ClientComponentWrapper from "@/components/ClientComponentWrapper";
import "./globals.css";

export default async function Home() {
	const collectionsResponse = await fetch(
		"https://api.testvalley.kr/collections?prearrangedDiscount",
	);
	const collectionsJson: CollectionsResponse = await collectionsResponse.json();
	const bannerResponse = await fetch(
		"https://api.testvalley.kr/main-banner/all",
	);
	const bannerJson: BannerType[] = await bannerResponse.json();
	const shortcutResponse = await fetch(
		"https://api.testvalley.kr/main-shortcut/all",
	);
	const shortcutJson: ShortcutType[] = await shortcutResponse.json();
	return (
		<main>
			<ClientComponentWrapper
				banners={bannerJson}
				shortcuts={shortcutJson}
				collections={collectionsJson}
			/>
		</main>
	);
}
