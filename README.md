`react-mdui`是一个基于[mdui](https://mdui.org)的React UI库，除了对mdui内置组件的封装，还增加了一些扩展组件。
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

## 下拉选择

## 颜色选择器ColorInput
颜色选择器对input[type="color"]进行美化

## 对话框菜单选择ListControlMenu
一个列表条目，点击后将显示一个包含待选项目的对话框

## 音频播放器MusicPlayer

# 关于
作者是一名在校高一学生