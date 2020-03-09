# mdui-in-react

`mdui-in-react`是一个基于[mdui](https://mdui.org)的React UI库，对mdui内置组件进行了封装（包括回调事件），还增加了一些实用扩展组件。

此项目是我的网站——[云极客工具](https://www.ygktool.cn)的衍生项目。同时也感谢mdui这款优秀的前端框架

# 开始

## 安装
`npm i mdui-in-react`

## 测试
已经配置好了webpack-sever，执行以下命令即可测试
`npm run dev`

## 使用
```
<TextInput  
    {...props}    
/>
```


# MDUI组件

## 输入框TextInput

### 参数
Name|type|default|description
----|----|-------|-----------
icon|string|不显示|要展示在输入框前的Material Design图标名
value|string||输入框内容
maxlength|string|不限制|最大字符数量
autofocus|boolean|false|自动聚焦
type|string|text|输入内容
rows|string|null|如过存在则自动切换为textarea
header|string|输入框|标签文字，默认浮动
placeholder|string|null|如果有内容（包括空格）将会固定header



## 列表控制——开关ListControlCheck




## 滑块RangeInput
Name|type|default|description
----|----|-------|-----------
max|string|10|最大值
min|string|1|最小值
step|string|1|步长
value|boolean|5|值
onValueChange|string|text|值变化时回调函数，参数是新的值
title|string|调节|标题文字


## 下拉选择Select
需要传入一个类似下面这个数组作为待选项目。  

```
[{    
    name:'通用物体和场景',    
    value:'normal'    
}, {    
    name:'动物',    
    value:'animal'    
}]
```
### 参数

Name|type|default|description
----|----|-------|-----------
options|[object]|--|待选项目
value|number|--|选中项目对应的value
onOptionChange|func|--|修改选项后的回调函数，参数是选中项目对应的value



# 扩展组件

## 音频播放器MusicPlayer
接受一个blob链接作为prop，支持调节进度/暂停/播放/下载

### 参数
Name|type|default|description
----|----|-------|-----------
audio|blob|--|音频
title|string|--|选中项目对应的value
audioOpt|object|--|audio对象的参数



## 颜色选择器ColorInput
颜色选择器对input[type="color"]进行美化，以一个带有色块的块级按钮呈现。
名称|类型|默认|描述
-   | - |  - | -
value|string|--|颜色值
text|string|"选择颜色"|标题文字
onColorChange|func|--|修改颜色后的回调函数，参数是选中项目对应的数组下标



## 对话框菜单选择ListControlMenu

一个列表条目，点击后将显示一个包含待选项目的对话框。需要传入一个与[下拉选择组件](#下拉选择)一样的数组

### 参数
名称|类型|默认|描述
-   | - |  - | -
items|string|不显示|要展示在前的Material Design图标名
checked|number|--|选中项目对应的数组下标
onCheckedChange|func|--|修改选项后的回调函数，参数是选中项目对应的数组下标
text|string|"请选择"|标题文字
type|string|text|输入内容



# 关于
作者是一名在校高一学生