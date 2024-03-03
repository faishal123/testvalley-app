"use client";
import styles from "./Shortcut.module.css";
import DesktopLayout from "../Layout/DesktopLayout";
import { ShortcutProps } from "./types";
import { ShortcutType } from "./types";
import { useMobile } from "@/utils/common";
import Image from "next/image";

const Shortcut: React.FC<ShortcutProps> = ({ shortcuts }) => {
	const isMobile = useMobile();

	if (shortcuts.length <= 0) {
		return null;
	}

	const shortcutsLength = shortcuts.length;
	const middlePoint = Math.floor(shortcutsLength / 2);
	const shortcutIconSize = isMobile ? 48 : 62;

	const renderSingleShortcut = (shortcut: ShortcutType) => {
		return (
			<div
				key={shortcut.mainShortcutId}
				className={`cursorPointer ${styles.singleShortcut}`}>
				<div>
					<Image
						src={shortcut.imageUrl}
						alt={shortcut.title}
						width={shortcutIconSize}
						height={shortcutIconSize}
					/>
				</div>
				<div>{shortcut.title}</div>
			</div>
		);
	};

	if (isMobile) {
		return (
			<>
				<div className={styles.mobileShortcutsContainer}>
					{shortcuts
						.slice(0, middlePoint)
						.map((shortcut) => renderSingleShortcut(shortcut))}
				</div>
				<div className={styles.mobileShortcutsContainer}>
					{shortcuts
						.slice(middlePoint, shortcutsLength)
						.map((shortcut) => renderSingleShortcut(shortcut))}
				</div>
			</>
		);
	}

	return (
		<DesktopLayout customClassName={styles.shortcutsContainer}>
			{shortcuts.map((shortcut) => renderSingleShortcut(shortcut))}
		</DesktopLayout>
	);
};

export default Shortcut;
