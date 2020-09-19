import * as React from "react";

/**
 * 列表组件
 * @TODO 头像/副标题
 */

const List = ({ items }) => {
	return (
		<ul className="mdui-list">
			{items.map((item: { href: string; text: React.ReactNode }) => {
				const Tag = item.href ? "a" : "li";
				return (
					<Tag
						href={item.href}
						className="mdui-col mdui-list-item mdui-ripple"
					>
						<div className="mdui-list-item-content">
							<div className="mdui-list-item-title mdui-list-item-one-line">
								{item.text}
							</div>
						</div>
					</Tag>
				);
			})}
		</ul>
	);
};

export default List;
