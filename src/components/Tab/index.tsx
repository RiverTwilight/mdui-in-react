import * as React from 'react'

export interface TabProps {
    tabs: {
        id: string,
        component: React.Component
    }[]
}

/**
 * Tab组件
 */
const Tab = ({ tabs }: TabProps): JSX.Element => (
    <>
        <div className="mdui-tab" mdui-tab="true">
            {tabs.map(tab => (
                <a key={tab.id} href={`#${tab.id}`} className="mdui-ripple">{tab.text}</a>
            ))}
        </div>
        {tabs.map((tab, i) => (
            <div key={i} id={tab.id}>{tab.component}</div>
        ))}
    </>
)

export default Tab
