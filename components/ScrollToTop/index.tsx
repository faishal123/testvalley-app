import Image from "next/image";
import styles from "./ScrollToTop.module.css";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
	const [showScrollToTop, setShowScrollToTop] = useState(false);

	useEffect(() => {
		document.addEventListener("scroll", () => {
			const htmlElement = document.getElementsByTagName("html")[0];
			if (htmlElement) {
				const htmlScrollPosition = htmlElement.scrollTop;
				if (htmlScrollPosition > 1150) {
					setShowScrollToTop(true);
				} else {
					setShowScrollToTop(false);
				}
			}
		});
	}, []);
	if (!showScrollToTop) {
		return null;
	}
	return (
		<Image
			onClick={() => {
				const htmlElement = document.getElementsByTagName("html")[0];
				if (htmlElement) {
					htmlElement.scrollTo({ top: 0, behavior: "smooth" });
				}
			}}
			className={styles.scrollToTop}
			width={48}
			height={48}
			alt="scrollToTop"
			src={"https://www.testvalley.kr/common/to_top.svg"}
		/>
	);
};

export default ScrollToTop;
