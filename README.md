# mdui-in-react

```jsx

<Input
    onValueChange={newText=>{
        this.setState({inputText:newText})
    }}
    value={inputText}
    header="输入内容"
    icon="link"
    error="这是一个可选的错误信息"
    type="number"
/>

```

`Mdui in react` is a react UI Library Based on [mdui](https://mdui.org). It encapsulates the built-in components of mdui (including callback events), and adds some practical extension components.

This project is a derivative project of my website [ygktool](https://www.ygktool.cn). Thanks to mdui for its excellent front-end framework!

## Quick Start

### Install

`npm i mdui-in-react`
or
`yarn add mdui-in-react`

### Usage

```jsx
import '../node_modules/mdui/dist/css/mdui.min.css'

<ComponentName  
    {...props}
/>
```

## MDUI Components

## 输入框Input

### Options

Name|type|default|description
----|----|-------|-----------
icon|string|No display|The name of the material design icon to display in front of the input
value|string|--|Input content
onValueChange|func|--|The callback function after the value of the input box changes. The parameter is the new value
rows|string|--|**If it exists, it will automatically switch to the textarea label**
header|string|输入框|Label Text
placeholder|string|null|If there is content (including space), the header will be fixed
other|object|--|Other parameters that can be used for input tags, using JSX synatx

## 列表控制——开关ListControlCheck

### Options

Name|type|default|description
----|----|-------|-----------
icon|string|settings|The name of the material design icon to display in front of the litem
checked|boolean|true|if check
onCheckedChange|func|--|Callback function when value changes, parameter is new value
title|string|开关|just as its name implies

## 滑块RangeInput

### Options

Name|type|default|description
----|----|-------|-----------
value|string|5|just as its name implies
onValueChange|string|text|Callback function when value changes, the parameter is new value
title|string|调节|just as its name implies
other|object|--|Other parameters that can be used for input[type='range'] tags(Such as `max` `step`..), using JSX synatx.

## 下拉选择Select
You need to pass in an array similar to the following as the item to be selected.`Value` is usually used as an identifier 

```
[{    
    name:'通用物体和场景',    
    value:'normal'    
}, {    
    name:'动物',    
    value:'animal'    
}]
```
### Options
Name|type|default|description
----|----|-------|-----------
options|[object]|--|Items to be selected
value|number|--|Value corresponding to the selected item
onOptionChange|func|--|The callback function after the option is modified. The parameter is the value corresponding to the selected item



# Extended components

## 音频播放器MusicPlayer
Accept a blob link as a prop, support adjusting progress / pause / play / download

### options
Name|type|default|description
----|----|-------|-----------
audio|blob|--|Audio source
title|string|音频播放器|A title in the top left corner of card
subtitle|string|--|A subtitle in the top left corner of card
cover|string|https://s4.music.126.net/style/web2/img/default/default_album.jpg|A img in the left of card
other|object|--|Other parameters that can be used for audio tags, using JSX synatx.



## 颜色选择器ColorInput
The color selector beautifies the input[type= "color"] tag as a block level button with color blocks.

### options
Name|type|default|description
----|----|-------|-----------
value|string|--|color value
text|string|"选择颜色"|标题文字
onColorChange|func|--|The callback function after modifying the color. The parameter is the color value
other|object|--|Other parameters that can be used for input[type='color'] tags, using JSX synatx.

## 回顶按钮ToTop

When the screen is more than 148px away from the top, it will automatically appear in the lower left corner. After clicking, the screen will smoothly scroll to the top.
### options
Nothing....



## 对话框菜单选择ListControlMenu

A list item, click to display a dialog box containing the items to be selected. You need to pass in an array similar to [下拉选择](#下拉选择)

### Optinos
Name|type|default|description
----|----|-------|-----------
items|array|--|Items to be selected
checked|number|--|**Array subscript** corresponding to the selected item
onCheckedChange|func|--|The callback function after modifying the option. **The parameter is value attribute**
title|string|"请选择"|标题文字
icon|string|settings|The name of the material design icon to display in front of the input



# Related resources
* MDUI：[https://mdui.org](https://mdui.org)
* Material Design Icons [https://www.mdui.org/docs/material_icon](https://www.mdui.org/docs/material_icon)

# About
The author is a senior one student

# License
