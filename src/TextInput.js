import React from 'react'
import PropTypes from 'prop-types'

const TextInput = ({icon, rows, header, placeholder, maxlength, value, onTextChange, type, autofocus}) =>{
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
            {(icon)?
                <i className="mdui-icon material-icons">{icon}</i>
                :
                null}{Lable}
            <TagType
                maxLength={maxlength}
                placeholder={placeholder} 
                rows={rows}
                onChange={e=>{
                    onTextChange(e.target.value)
                }} 
                value={value||''}
                autoFocus={autofocus} type={type} className="mdui-textfield-input">
            </TagType>
        </div>
    )
}

TextInput.defaultProps = {
    icon: '',
    type: 'text',
    autofocus: false,
    maxlength: null,
    placeholder:''
}

TextInput.propTypes={
    text:PropTypes.string,
    value:PropTypes.bool,
    onTextChange:PropTypes.func,
    icon:PropTypes.string,
    autofocus: PropTypes.bool,
    placeholder:PropTypes.string,
    rows:PropTypes.string
}

export default TextInput