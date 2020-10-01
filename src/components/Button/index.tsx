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
		${className}
        ${raised ? getClassName("raised") : ""}
        ${ripple ? getClassName("ripple") : ""}
        ${icon && !title ? getClassName("icon") : ""}
        ${primary ? "mdui-color-theme" : ""}
         `.replace(/\n\s+/g, " ")}
		>
			{icon && (
				<i
					className={`${
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
