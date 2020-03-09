import React from 'react'
import PropTypes from 'prop-types'

const Input = ({icon, rows, header, placeholder, value, onValueChange, ...others}) =>{
    icon = (icon)?
    <i className="mdui-icon material-icons">{icon}</i>
    :
    null;
    const TagType = (rows)?'textarea':'input';
    const Lable = (header)?
    <label className="mdui-textfield-label">{header}</label>
    :
    null
    return(
        <div className={`mdui-textfield ${(placeholder)?'':'mdui-textfield-floating-label'}`}>
            {icon}{Lable}
            <TagType
                {...others}
                placeholder={placeholder} 
                rows={rows}
                onChange={e=>{
                    onValueChange(e.target.value)
                }} 
                value={value}
                className="mdui-textfield-input">
            </TagType>
        </div>
    )
}

Input.defaultProps = {
    placeholder:'',
    value:''
}

Input.propTypes={
    value:PropTypes.string,
    onValueChange:PropTypes.func,
    icon:PropTypes.string,
    placeholder:PropTypes.string,
    rows:PropTypes.string
}

module.exports = Input