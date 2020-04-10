export interface InputProps {
    value: string;
    onValueChange?(newText: string): void;
    icon?: string;
    placeholder?: string;
    rows?: number;
    helper?: string;
    error?: string;
    header?: string;
    others?: any;
    /** 提示大小写状态 */
    capsLock?: boolean;
}
export interface ListControlMenu {
    /** 对话框以及列表的标题 */
    title?: string;
    /** 选中的项目索引 */
    checked: number;
    /** 待选项目 */
    items: { name: string; value: string }[];
    /** 选项更改后的回调函数 */
    onCheckedChange?(checkedIndex: number): void;
    icon?: string;
}

export interface ColorProps { 
    /**
     * 颜色值(16进制或RGB)
     */
    color: string; 
    /**
     * 显示在按钮上的文本
     */
    text?: string; 
    /**
     * 颜色更改时的回调函数
     * @param color 新的颜色值
     */
	onColorChange?(color: string): void;
}

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
