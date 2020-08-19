import * as React from 'react'

interface ListProps {
    items: {
        text: string
    }[]
}

/**
 * 列表组件
 * @TODO 头像/副标题
 */

const List = ({ items }: ListProps) => items.map(item =>
    (
        <li className="mdui-col mdui-list-item mdui-ripple">
            <div className="mdui-list-item-content">
                <div className="mdui-list-item-title mdui-list-item-one-line">
                    {item.text}
                </div>
            </div>
        </li>
    )
)

export default List
