import * as React from "react";
import { snackbar } from "mdui";
import { signListener, removeListener } from "./useDragListener";

class FileInput extends React.Component<FRProps, FRState> {
	realInput: any;
	constructor(props) {
		super(props);
		this.state = {
			btnText: props.webkitdirectory
				? "选择文件夹"
				: props.title
				? props.title
				: "选择文件",
		};
	}
	componentDidMount() {
		if (this.props.webkitdirectory) {
			this.realInput.webkitdirectory = true;
		}
		this.props.readbydrag &&
			signListener(
				() => {},
				(e: any) => this.readFile(null, e)
			);
	}
	componentWillUnmount() {
		this.props.readbydrag && removeListener();
	}
	readFile(inputEvent?: any, dragEvent?: any) {
		// console.log(arguments)
		if (!inputEvent && !dragEvent) return null;
		const { maxSize = 99999999, onFileUpload } = this.props;
		const currentFileList = inputEvent
			? inputEvent.target.files
			: dragEvent.dataTransfer.files;

		this.setState({
			btnText:
				currentFileList.length < 2
					? currentFileList[0].name
					: `${currentFileList.length}个文件`,
		});

		if (this.props.webkitdirectory) {
			onFileUpload && onFileUpload(null, null, currentFileList);
			return;
		}

		for (var i = 0; i < currentFileList.length; i++) {
			let file = currentFileList[i];
			if (file.size > maxSize) {
				snackbar({
					message: "文件大小不能超过" + maxSize / 1024 / 1024 + "MB",
				});
			} else {
				var freader = new FileReader();
				freader.readAsDataURL(file);
				freader.onload = (fe) => {
					onFileUpload &&
						fe.target &&
						onFileUpload(fe.target.result, file, currentFileList);
						this.realInput.value = null
				};
			}
		}
	}
	handleClick() {
		this.realInput.click();
	}
	render() {
		const {
			webkitdirectory,
			fileType,
			onFileUpload,
			maxWidth = "120px",
			...props
		} = this.props;
		var icon = "file_upload";
		if (fileType) {
			let execArr = fileType.match(/^(\S+)\/\S+$/);
			switch (execArr && execArr[1]) {
				case "image":
					icon = "image";
					break;
				case "video":
					icon = "videocam";
					break;
				default:
					icon = "folder";
			}
		}
		return (
			<>
				<button
					style={{ maxWidth: maxWidth }}
					className="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme"
					onClick={this.handleClick.bind(this)}
				>
					<i className="mdui-icon-left mdui-icon material-icons">
						{icon}
					</i>
					{this.state.btnText}
				</button>
				<input
					accept={fileType}
					type="file"
					style={{ display: "none" }}
					onInput={this.readFile.bind(this)}
					ref={(r) => (this.realInput = r)}
					{...props}
				/>
			</>
		);
	}
}

export default FileInput;
