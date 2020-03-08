# mdui-in-react

`mdui-in-react`是一个基于[mdui](https://mdui.org)的React UI库，对mdui内置组件进行了封装（包括回调事件），还增加了一些实用扩展组件。

此项目是我的网站——[云极客工具](https://www.ygktool.cn)的衍生项目。同时也感谢mdui这款优秀的前端框架

# 开始

## 安装
`npm i mdui-in-react`

## 使用
`
<TextInput
    icon="link"
    value={this.state.link}
    header="Please Enter Your Website"
    onTextChange={newText=>this.setState({link: newText})}
/>
`

# 组件

## 输入框TextInput
### 参数
名称|类型|默认|描述
-   | - |  - | -
icon|string|不显示|要展示在输入框前的Material Design图标名
value|string||输入框内容
icon|string|不显示|要展示在输入框前的Material Design图标名
icon|string|不显示|要展示在输入框前的Material Design图标名
icon|string|不显示|要展示在输入框前的Material Design图标名

## 下拉选择

## 颜色选择器ColorInput
颜色选择器对input[type="color"]进行美化

## 对话框菜单选择ListControlMenu
一个列表条目，点击后将显示一个包含待选项目的对话框

##列表控制——开关

##滑块RangeInput

## 音频播放器MusicPlayer
接受一个blob链接，支持调节进度/暂停/播放/下载

# 关于
作者是一名在校高一学生