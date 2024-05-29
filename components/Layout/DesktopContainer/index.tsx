import { ReactNode } from "react";
import styles from "./DesktopContainer.module.css";

const DesktopContainer = ({ children }: { children: ReactNode }) => {
	return <div className={styles.container}>{children}</div>;
};

export default DesktopContainer;
