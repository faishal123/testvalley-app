import BannerDesktop from "./Desktop";
import BannerMobile from "./Mobile";
import { useMobile } from "@/utils/common";
import { BannerProps } from "./Desktop/types";

const Banner: React.FC<BannerProps> = ({ banners }) => {
	const isMobile = useMobile();

	if (isMobile) {
		return <BannerMobile banners={banners} />;
	}

	return <BannerDesktop banners={banners} />;
};

export default Banner;
