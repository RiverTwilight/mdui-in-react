import * as React from 'react'

/***
   *列表控制-开关组件
   **/

interface ListControlCheck{
    title?:string;
    checked:boolean;
    onCheckedChange?(isChecked: boolean): never;
    icon?:string;
}

export default ({onCheckedChange, checked = true, title, icon = "settings"}: ListControlCheck) => (
    <li className="mdui-list-item mdui-ripple">
        <i className="mdui-list-item-icon mdui-icon material-icons">{icon}</i>
        <div className="mdui-list-item-content">{title}</div>
        <label className="mdui-switch">
            <input onChange={(e: {
                target: {
                    checked: any
                }
            }) => {
                onCheckedChange(e.target.checked)
            } } type="checkbox" checked={checked} />
            <i className="mdui-switch-icon"></i>
        </label>
    </li>
)
