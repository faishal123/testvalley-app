import styles from "./Tag.module.css";
import { TagProps } from "./types";

const Tag: React.FC<TagProps> = ({ title, color = "default" }) => {
	return (
		<div className={`${color === "red" ? styles.red : ""} ${styles.tag}`}>
			{title}
		</div>
	);
};

export default Tag;
