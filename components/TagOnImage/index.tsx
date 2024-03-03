import Image from "next/image";
import styles from "./TagOnImage.module.css";
import { TagOnImageProps } from "./types";

const TagOnImage: React.FC<TagOnImageProps> = ({ title, icon }) => {
	return (
		<div className={styles.container}>
			<Image src={icon} alt={title} width={10} height={10} />
			{title}
		</div>
	);
};

export default TagOnImage;
