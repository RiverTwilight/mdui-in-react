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
	component,
	iconColor,
	...props
}) => {
	const Component = component || "button";
	return (
		<Component
			{...props}
			className={`
		mdui-btn
		${className ? className : ""}
        ${raised ? getClassName("raised") : ""}
        ${ripple ? getClassName("ripple") : ""}
        ${icon && !title ? getClassName("icon") : ""}
        ${primary ? "mdui-color-theme" : ""}
         `.replace(/\n\s+/g, " ")}
		>
			{icon && (
				<i
					className={`${title && "mdui-icon-left"} ${
						iconColor ? `mdui-text-color-${iconColor}` : ""
					} mdui-icon material-icons`}
				>
					{icon}
				</i>
			)}
			{title}
		</Component>
	);
};

export default Button;
