import Header from "./Desktop";
import HeaderMobile from "./Mobile";
import { useMobile } from "@/utils/common";

const HeaderComponent = () => {
	const isMobile = useMobile();
	if (!isMobile) {
		return <Header />;
	}
	return <HeaderMobile />;
};

export default HeaderComponent;
