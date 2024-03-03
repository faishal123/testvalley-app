import { MobileContainerLayoutProps } from "../types";
import styles from "./MobileContainerLayout.module.css";

const MobileContainerLayout: React.FC<MobileContainerLayoutProps> = ({
	children,
}) => {
	return <div className={styles.container}>{children}</div>;
};
export default MobileContainerLayout;
