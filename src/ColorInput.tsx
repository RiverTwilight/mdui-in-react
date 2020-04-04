import * as React from 'react'

/**
  *颜色选择按钮组件
  **/

interface ColorProps { 
	color: string; 
	text?: string; 
	onColorChange?(color: string);
}

/***必须要class组件，因为需要用到Ref***/
export default class Color extends React.Component<ColorProps, {}>{
	props: ColorProps
	input: any
	render(){
		const { color, text, onColorChange } = this.props
		return(
			<>
				<button
					className="mdui-btn mdui-btn-block" 					
					onClick={()=>{
						this.input.click()
					}}
				>
				<i style={{color:color}} className="mdui-icon-left mdui-icon material-icons">lens</i>
				{text}{color}
				</button>
				<input 
					style={{display:'none'}}
					value={color} ref={r => this.input = r} type="color"
					onChange={(e: { target: { value: any } })=>{
						onColorChange(e.target.value)
					}}
				></input>
			</>
		)
	}
}
