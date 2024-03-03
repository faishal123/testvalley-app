"use client";
import Input from "../Input";
import { useState } from "react";
import Image from "next/image";
import { InputProps } from "../Input";

interface SearchInputProps extends InputProps {}

const SearchInput: React.FC<SearchInputProps> = ({
	placeholder,
	customClassName,
}) => {
	const [searchValue, setSearchValue] = useState("");
	return (
		<div>
			<Input
				type="search"
				value={searchValue}
				onChange={(e) => {
					setSearchValue(e?.target?.value);
				}}
				customClassName={customClassName}
				leftIcon={
					<Image
						className={"cursorPointer"}
						src={"https://www.testvalley.kr/common/search.svg"}
						alt="searchIcon"
						width={20}
						height={20}
					/>
				}
				rightIcon={
					searchValue ? (
						<Image
							onClick={() => {
								setSearchValue("");
							}}
							className={"cursorPointer"}
							src={"https://www.testvalley.kr/common/clear.svg"}
							alt="clearIcon"
							width={16}
							height={16}
						/>
					) : undefined
				}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default SearchInput;
