import * as React from 'react'

export interface InputProps {
    value: string;
    onValueChange?(newText: string): void;
    icon?: string;
    placeholder?: string;
    rows?: number;
    /** 帮助文本 */
    helper?: string;
    error?: string;
    header?: string;
    /** 其他Input标签属性 */
    type?: string;
}

export default (props: InputProps) => {
    const { error, helper, icon, rows, header, placeholder, value, onValueChange, ...others } = props;
    const TagType = rows ? 'textarea' : 'input';
    const [showPwd, setShowPwd] = React.useState(false);
    return (
        <div className={`${error ? "mdui-textfield-invalid" : ""} mdui-textfield ${(placeholder) ? '' : 'mdui-textfield-floating-label'}`}>
            {icon &&
                <i className="mdui-icon material-icons">{icon}</i>
            }
            {header &&
                <label className="mdui-textfield-label">{header}</label>
            }
            <TagType
                {...others}
                placeholder={placeholder}
                rows={rows}
                onChange={(e: { target: { value: any; }; }) => {
                    onValueChange && onValueChange(e.target.value)
                }}
                value={value}
                type={showPwd?'':props.type === 'password'?'password':props.type}
                className="mdui-textfield-input">
            </TagType>
            {props.type === 'password' &&
                <i
                    style={{
                        right: '8px',
                        cursor: 'pointer'
                    }}
                    onClick = {()=>{
                        setShowPwd(!showPwd)
                    }}
                    className="mdui-icon material-icons">{showPwd?'visibility_off':'visibility'}</i>
            }
            {error &&
                <div className="mdui-textfield-error">{error}</div>
            }
            {helper &&
                <div className="mdui-textfield-helper">{helper}</div>
            }
        </div>
    )
}
