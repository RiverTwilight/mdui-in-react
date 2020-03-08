import PropTypes from 'prop-types'
import React from 'react'

/***
   *列表控制-开关组件
   *2020-02-16 江村暮
   **/

const ListControlCheck = ({onCheckedChange, checked, text, icon}) => {
    return(
        <li className="mdui-list-item mdui-ripple">
            <i className="mdui-list-item-icon mdui-icon material-icons">{icon}</i>
            <div className="mdui-list-item-content">{text}</div>
            <label className="mdui-switch">
                <input 
                    onChange={e=>{
                        onCheckedChange(e.target.checked)
                    }}
                    type="checkbox" checked={checked}
                />
                <i className="mdui-switch-icon"></i>
            </label>
        </li>
    )
}

ListControlCheck.defaultProps = {
    icon: 'settings',
    onCheckedChange:()=>{}
}

ListControlCheck.propTypes={
    text:PropTypes.string.isRequired,
    checked:PropTypes.bool.isRequired,
    onCheckedChange:PropTypes.func,
    icon:PropTypes.string
}

export default ListControlCheck