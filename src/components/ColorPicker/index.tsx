import * as React from 'react'

/**
  *颜色选择按钮组件
  **/

export interface ColorProps {
    /**
     * 颜色值(16进制或RGB)
     */
	color: string;
    /**
     * 显示在按钮上的文本
     */
	text?: string;
    /**
     * 颜色更改时的回调函数
     * @param color 新的颜色值
     */
	onColorChange?(color: string): void;
}

/***必须要class组件，因为需要用到Ref***/
export default class Color extends React.Component<ColorProps, {}>{
	input: any
	render() {
		const { color, text, onColorChange } = this.props
		return (
			<>
				<button
					className="mdui-btn mdui-btn-block"
					onClick={() => {
						this.input.click()
					}}
				>
					<i style={{ color: color }} className="mdui-icon-left mdui-icon material-icons">lens</i>
					{text}{color}
				</button>
				<input
					style={{ display: 'none' }}
					value={color} ref={r => this.input = r} type="color"
					onChange={(e: { target: { value: any } }) => {
						onColorChange(e.target.value)
					}}
				></input>
			</>
		)
	}
}
