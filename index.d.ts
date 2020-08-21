declare interface InputProps {
    /** 如果是password，将显示一个显示密码按钮 */
    type?: 'number' | 'text' | 'file' | 'date' | 'password';
    value: string;
    onValueChange?(newText: string): void;
    icon?: string;
    /** 存在则文本框变为textarea */
    rows?: number;
    helper?: string;
    error?: string;
    placeholder?: string;
    header?: string;
    others?: any;
}

declare interface LCMProps {
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

declare interface BAProps {
    /** 是否显示 */
    ifShow: boolean;
    /** 标题 */
    title: string;
    onClose(): void;
    children: any;
    height?: number
}

declare interface CPProps {
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

declare interface LCCProps {
    title?: string;
    checked: boolean;
    /**
     * 状态更改时回调函数
     * @param isChecked 是否选中
     */
    onCheckedChange?(isChecked: boolean): void;
    /**
     * 显示在开关前的图标
     */
    icon?: string;
}

declare interface MusicProps {
    /** 音频链接 */
    audio: string;
    /** 卡片标题 */
    title?: string;
    /** 卡片副标题 */
    subtitle?: string;
    cover?: string;
}

declare interface MusicState {
    onPlay: boolean;
    playProgress: number;
    audioLength: number;
}

declare interface RIProp {
    max?: string,
    min?: string,
    step?: string,
    value: string,
    onValueChange(newValue: string): void,
    title: string,
}

declare interface ListProps {
    items: {
        text: string
    }[]
}

declare interface SelectProps {
    options: { name: string, value: string }[],
    value: string,
    onOptionChange(value: string): void
}

declare interface SelectState {
    dom: any
}

declare interface FRProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'webkitdirectory' | 'size' | 'prefix' | 'type'> {
    /** 按钮宽度 */
    maxWidth?: string,
    maxSize?: number,
    onFileChange?(base64: any, file: File | null, fileList: FileList | null): void,
    fileType?: string,
    webkitdirectory?: boolean,
    title?: string,
    /** 是否监听拖拽文件事件 */
    readbydrag?: boolean
}

declare interface FRState {
    btnText: string
}

declare module 'mdui-in-react' {
    /**
     * 输入框
     */
    export function Input(props: InputProps): JSX.Element

    export function ListControlMenu(props: LCMProps): JSX.Element

    export function ColorPicker(props: CPProps): JSX.Element


    /**
     * 列表控制-开关组件
     */
    export function ListControlCheck(props: LCCProps): JSX.Element

    /**
     * 底部弹出菜单
     * 在640Px以上的屏幕会呈现为普通div元素
     */
    export class BottomAlert extends React.Component<BAProps, {}> { }


    /**
      *音乐播放器
      **/
    export class MusicPlayer extends React.Component<MusicProps, MusicState> { }

    /**
     * 读取文件组件
     */
    export class FileInput extends React.Component<FRProps, FRState> { }

    /**
     * 滑块
     */
    export function RangeInput(props: RIProp): JSX.Element

    export function List(props: ListProps): JSX.Element
}
