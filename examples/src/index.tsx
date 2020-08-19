import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ListControlMenu from '../../src/ListControlMenu'


const menu_types = [{
    name:'通用物体和场景',
    value:'normal'
}, {
    name:'动物',
    value:'animal'
}]
/*
interface Props{

}

interface State{
    inputText: string;
    menu_type: number;
    SelectorValue: string;
    checked: boolean
}
*/
class Ui extends React.Component<any, any>{
    constructor(props: any) {
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
                {/*<ToTop />
                <ColorInput
                    onColorChange={color=>{

                    }}
                />
                <Input
                    onValueChange={(newText: any)=>{
                        this.setState({inputText:newText})
                    }}
                    value={inputText}
                    header="输入内容"
                    icon="link"
                    error="这是一个可选的错误信息"
                    capsLock={true}
                    type="number"
                /> */}
                <ListControlMenu
                    icon="language"
                    title="识别类型"
                    checked={menu_type}
                    onCheckedChange={checked=>{
                        this.setState({menu_type:checked})
                    }}
                    items={menu_types}
                />
                {/*<MusicPlayer
                    audio=""
                    title="My Revolution"
                    subtitle="Miracle Of Sound"
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
                />*/}
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Ui />, document.getElementById('root'))
