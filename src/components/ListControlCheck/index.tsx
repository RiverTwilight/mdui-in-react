import * as React from 'react'

const ListControlCheck = ({ onCheckedChange, checked = true, title, icon = "settings" }: LCCProps) => (
    <li className="mdui-list-item mdui-ripple">
        <i className="mdui-list-item-icon mdui-icon material-icons">{icon}</i>
        <div className="mdui-list-item-content">{title}</div>
        <label className="mdui-switch">
            <input onChange={(e: {
                target: {
                    checked: any
                }
            }) => {
                onCheckedChange && onCheckedChange(e.target.checked)
            }} type="checkbox" checked={checked} />
            <i className="mdui-switch-icon"></i>
        </label>
    </li>
)

export default ListControlCheck
