import React from 'react'
import ReactDOM from 'react-dom'
import {
    ListControlMenu,
    Input,
    ColorInput,
    ListControlCheck,
    RangeInput,
    MusicPlayer,
    Select,
    ToTop
} from '../test'

console.log(Input)
const menu_types = [{
    name:'通用物体和场景',
    value:'normal'
}, {
    name:'动物',
    value:'animal'
}]


class Ui extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText:'',
            menu_type:0,
            SelectorValue:'animal',
            checked:true
        }
    }
    render(){
        const { checked, inputText, menu_type, SelectorValue } = this.state
        return(
            <React.Fragment>
                <ToTop />
                <Input
                    onValueChange={newText=>{
                        this.setState({inputText:newText})
                    }}
                    value={inputText}
                    header="输入内容"
                    icon="link"
                    type="number"
                /> 
                <ListControlMenu
                    icon="language"
                    text="识别类型"
                    checked={menu_type}
                    onCheckedChange={checked=>{
                        this.setState({menu_type:checked})
                    }}
                    items={menu_types}
                />
                <ListControlCheck
                    checked={checked}
                    onCheckedChange={ifCheck=>{
                        this.setState({checked:ifCheck})
                    }}
                    title="这是一个开关"
                />
                <Select
                    options={menu_types}
                    onOptionChange={newOpt=>{
                        this.setState({SelectorValue:newOpt})
                    }}
                    value={SelectorValue}
                />
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Ui />, document.getElementById('root'))