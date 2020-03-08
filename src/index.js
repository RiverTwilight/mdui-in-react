import React from 'react'
import ReactDOM from 'react-dom'
import {
    ListControlMenu,
    TextInput,
    ColorInput,
    ListControlCheck,
    RangeInput,
    MusicPlayer
} from '../test'

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
            menu_type:0
        }
    }
    render(){
        const { inputText, menu_type } = this.state
        return(
            <React.Fragment>
                <TextInput
                    onTextChange={newText=>{
                        this.setState({inputText:newText})
                    }}
                    value={inputText}
                    header="输入内容"
                    icon="link"
                    maxlength="100"
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
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Ui />, document.getElementById('root'))