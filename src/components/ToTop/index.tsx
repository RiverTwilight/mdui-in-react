import * as React from "react";

declare global {
	interface Window {
		toTop: any;
	}
}

const ToTop = () => {
	const handleClick = () => {
		if (document.documentElement.scrollTop) {
			window.toTop = setInterval(() => {
				if (document.documentElement.scrollTop === 0)
					clearInterval(window.toTop);
				document.documentElement.scrollTop -= 200;
			}, 40);
		} else {
			window.history.pushState(null, "", "#"); //兼容
		}
	};
	const handleScroll = () => {
		var t = document.documentElement.scrollTop || document.body.scrollTop;
		if (t <= 148) {
			setHide(true);
		} else {
			setHide(false);
		}
	};
	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	const [isHide, setHide] = React.useState(true);
	return (
		<button
			onClick={handleClick}
			className={`mdui-color-theme mdui-fab mdui-fab-mini mdui-fab-fixed ${
				isHide ? "mdui-fab-hide" : ""
			}`}
		>
			<i className="mdui-icon mdui-text-color-white material-icons">
				&#xe5d8;
			</i>
		</button>
	);
};

export default ToTop;
