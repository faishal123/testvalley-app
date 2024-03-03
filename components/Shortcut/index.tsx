"use client";
import styles from "./Shortcut.module.css";
import DesktopLayout from "../Layout/DesktopLayout";
import { ShortcutProps } from "./types";
import Image from "next/image";

const Shortcut: React.FC<ShortcutProps> = ({ shortcuts }) => {
	if (shortcuts.length <= 0) {
		return null;
	}

	return (
		<DesktopLayout customClassName={styles.shortcutsContainer}>
			<>
				{shortcuts.map((shortcut) => (
					<div
						key={shortcut.mainShortcutId}
						className={`cursorPointer ${styles.singleShortcut}`}>
						<div>
							<Image
								src={shortcut.imageUrl}
								alt={shortcut.title}
								width={62}
								height={62}
							/>
						</div>
						<div>{shortcut.title}</div>
					</div>
				))}
			</>
		</DesktopLayout>
	);
};

export default Shortcut;
