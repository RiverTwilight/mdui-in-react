import * as React from 'react'

interface InputProps {
    value:string;
    onValueChange?(newText: string): never;
    icon?:string;
    placeholder?:string;
    rows?: number;
    helper?:string;
    error?: string;
    header?: string;
    others?:Object;
}

export const Input = ({error, helper, icon, rows, header, placeholder, value, onValueChange, ...others}:InputProps) =>{
    const TagType = rows?'textarea':'input';
    return(
        <div className={`mdui-textfield ${(placeholder)?'':'mdui-textfield-floating-label'}`}>
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
                onChange={(e: { target: { value: any; }; })=>{
                    onValueChange(e.target.value)
                }} 
                value={value}
                className="mdui-textfield-input">
            </TagType>
            {error &&
                <div className="mdui-textfield-error">{error}</div>
            }
            {helper &&
                <div className="mdui-textfield-helper">{helper}</div>   
            }
        </div>
    )
}
