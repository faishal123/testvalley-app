import styles from "./Mobile.module.css";
import Image from "next/image";

const HeaderMobile = () => {
	return (
		<div className={styles.container}>
			<Image
				width={125.7}
				height={47}
				alt="logo"
				src={"https://www.testvalley.kr/logo/logo-mobile-new.svg"}
			/>
			<div>
				<Image
					className="cursorPointer"
					width={24}
					height={24}
					alt="notification"
					src={"https://www.testvalley.kr/common/bell_default.svg"}
				/>
				<Image
					className="cursorPointer"
					width={18}
					height={20}
					alt="search"
					src={"https://www.testvalley.kr/common/search_new.svg"}
				/>
			</div>
		</div>
	);
};

export default HeaderMobile;
