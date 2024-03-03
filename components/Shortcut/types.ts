export type ShortcutType = {
	createdAt: string;
	creator: string;
	deletedAt: null | string;
	deleter: null | string;
	imageUrl: string;
	linkUrl: string;
	mainShortcutId: number;
	sort: number;
	title: string;
	updatedAt: string | null;
	updater: string | null;
};

export type ShortcutProps = {
	shortcuts: ShortcutType[];
};
