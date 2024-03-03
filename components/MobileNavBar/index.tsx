import Image from "next/image";
import styles from "./MobileNavBar.module.css";

const MobileNavBar = () => {
	const items = [
		{
			icon: "https://www.testvalley.kr/navibar/ico-home-on.svg",
			title: "홈",
		},
		{
			icon: "https://www.testvalley.kr/navibar/ico-search-off.svg",
			title: "검색",
		},
		{
			icon: "https://www.testvalley.kr/navibar/ico-category-off.svg",
			title: "카테고리",
		},
		{
			icon: "https://www.testvalley.kr/navibar/ico-likelist-off.svg",
			title: "좋아요",
		},
		{
			icon: "https://www.testvalley.kr/navibar/ico-mypage-off.svg",
			title: "마이페이지",
		},
	];

	return (
		<div className={styles.container}>
			{items.map((item) => (
				<div key={item.title}>
					<div>
						<Image src={item.icon} alt={item.title} width={21} height={21} />
					</div>
					<span>{item.title}</span>
				</div>
			))}
		</div>
	);
};

export default MobileNavBar;
