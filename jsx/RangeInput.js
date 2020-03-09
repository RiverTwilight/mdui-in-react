import React from 'react';
import PropTypes from 'prop-types'

const RangeInput = ({max, min, step, value, title, onValueChange}) => {
	console.log(value)
	return(
		<div className="mdui-textfield">
			<label className="mdui-textfield-label">{title}</label>
			<label className="mdui-slider">
				<input 
					onChange={e=>{
						onValueChange(e.target.value)
					}}
					type="range" value={value}
					step={step} min={min}
					max={max}
				/>
			</label>
		</div>
	)
}

RangeInput.defaultProps = {
    max:10,
    min:1,
	step:1,
	value:5,
    title:'调节'
}

RangeInput.propTypes={
    max:PropTypes.string,
    min:PropTypes.string,
    step:PropTypes.string,
    value:PropTypes.string,
    onValueChange:PropTypes.func,
    title:PropTypes.string,
}

module.exports = RangeInput