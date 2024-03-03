import { ShortcutType } from "../Shortcut/types";
import { CollectionsResponse } from "../HotDeal/types";
import { BannerType } from "@/components/Banner/Desktop/types";

export type ClientComponentWrapperProps = {
	banners: BannerType[];
	shortcuts: ShortcutType[];
	collections: CollectionsResponse;
};
