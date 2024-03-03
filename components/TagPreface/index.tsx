import Image from "next/image";
import { TagPrefaceProps } from "./types";
import styles from "./TagPreface.module.css";

const TagPreface: React.FC<TagPrefaceProps> = ({ icon, title }) => {
	return (
		<div className={styles.container}>
			<Image src={icon} alt={title} width={14} height={14} />
			{title}
		</div>
	);
};

export default TagPreface;
