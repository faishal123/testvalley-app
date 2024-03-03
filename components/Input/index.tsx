import { ReactElement } from "react";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

export interface InputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	leftIcon?: ReactElement;
	rightIcon?: ReactElement;
	customClassName?: string;
}

const Input: React.FC<InputProps> = ({
	placeholder,
	leftIcon,
	customClassName,
	type,
	value,
	onChange,
	rightIcon,
}) => {
	return (
		<div className={`${styles.inputContainer} ${customClassName || ""}`}>
			{leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}
			<input
				value={value}
				onChange={onChange}
				type={type}
				className={styles.input}
				placeholder={placeholder}
			/>
			{rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
		</div>
	);
};

export default Input;
