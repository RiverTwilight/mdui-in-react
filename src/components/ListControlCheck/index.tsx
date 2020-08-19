import * as React from 'react'

export interface ListControlCheck{
    title?:string;
    checked:boolean;
    /**
     * 状态更改时回调函数
     * @param isChecked 是否选中
     */
    onCheckedChange?(isChecked: boolean): void;
    /**
     * 显示在开关前的图标
     */
    icon?:string;
}
/**
 * 列表控制-开关组件
 */

export default ({ onCheckedChange, checked = true, title, icon = "settings" }: ListControlCheck) => (
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
