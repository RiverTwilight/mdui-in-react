import * as React from "react";

const getClassName = (props: string) => {
	return props ? `mdui-btn-${props}` : "";
};

const Button = ({
	icon,
	raised,
	primary,
	className,
	ripple,
	title,
	...props
}) => {
	return (
		<button
			{...props}
			className={`
        mdui-btn
        ${getClassName(raised)}
        ${getClassName(ripple)}
        ${icon && getClassName("icon")}
        ${primary && getClassName("theme")}
        ${className && className}
         `}
		>
			{icon && (
				<i
					className={`mdui-text-color-theme ${
						title && "mdui-icon-left"
					} mdui-icon material-icons`}
				>
					{icon}
				</i>
			)}
			{title}
		</button>
	);
};

export default Button;
