import Image from "next/image";
import SearchInput from "../../SearchInput";
import styles from "./Desktop.module.css";

const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.leftHeader}>
					<Image
						className={styles.logo}
						src={"https://www.testvalley.kr/logo/logo-new.svg"}
						alt="logo"
						width={128.345}
						height={25.093}
					/>
					<div className={styles.categoryContainer}>
						<Image
							src={"https://www.testvalley.kr/common/icon-category.svg"}
							alt="hamburgerIcon"
							width={16}
							height={16}
						/>
						<p>카테고리</p>
					</div>
					<SearchInput
						placeholder="살까말까 고민된다면 검색해보세요!"
						customClassName={styles.search}
					/>
				</div>
				<div className={styles.rightHeader}>
					<Image
						src={"https://www.testvalley.kr/common/home-event.svg"}
						alt="sort"
						width={28}
						height={28}
						className="cursorPointer"
					/>
					<Image
						className={styles.verticalBar}
						src={"https://www.testvalley.kr/common/vertical-bar.svg"}
						alt="verticalBar"
						width={1}
						height={14}
					/>
					<div className="cursorPointer">로그인 / 회원가입</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
