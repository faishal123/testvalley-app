import { DesktopLayoutProps } from "../types";
import styles from "./DesktopLayout.module.css";

const DesktopLayout: React.FC<DesktopLayoutProps> = ({
	children,
	customClassName,
}) => {
	return (
		<div className={`${customClassName || ""} ${styles.fullWidthContainer}`}>
			<div className={styles.childrenContainer}>{children}</div>
		</div>
	);
};

export default DesktopLayout;
