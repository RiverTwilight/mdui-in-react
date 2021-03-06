/// <reference path="../../../index.d.ts" />
import * as React from "react";
import { JQ } from "mdui";

class BottomAlert extends React.Component<BAProps, {}> {
	close() {
		this.props.onClose();
		JQ.hideOverlay(true);
	}
	registerCloseByOutside() {
		if (window.innerWidth <= 640) {
			document
				.getElementsByClassName("mdui-overlay")[0]
				.addEventListener("click", this.close.bind(this));
		}
	}
	componentDidMount() {
		this.registerCloseByOutside();
	}
	componentWillUnmount() {
		document.removeEventListener("click", this.close.bind(this));
	}
	shouldComponentUpdate(nextProps) {
		return nextProps.ifShow !== this.props.ifShow;
	}
	componentDidUpdate() {
		if (!this.props.ifShow) {
			this.close();
		}
		this.registerCloseByOutside();
	}
	render() {
		const { ifShow, title, children, height } = this.props;
		if (window.innerWidth <= 640 && ifShow) {
			JQ.showOverlay(1001); // 刚好超过头部
		}
		// 用return null会每次重载子组件内的图片
		return (
			<div
				className={`mdui-card bottom-alert bottom-dashboard ${
					!ifShow ? "bottom-dashboard-hidden" : ""
				}`}
			>
				<div className="mdui-hidden-sm-up mdui-card-media">
					<div className="mdui-card-menu">
						<button
							onClick={this.close.bind(this)}
							className="mdui-btn mdui-btn-icon"
						>
							<i className="mdui-icon material-icons">close</i>
						</button>
					</div>
				</div>
				<div
					style={{ padding: "15px 16px 16px 16px" }}
					className="mdui-card-primary"
				>
					<div className="mdui-card-primary-title">{title}</div>
				</div>
				<div
					style={{ height: height ? `${height}px` : `auto` }}
					className="main"
				>
					{children}
				</div>
				<div className="mdui-card-actions">{/** TODO */}</div>
			</div>
		);
	}
}

export default BottomAlert;
