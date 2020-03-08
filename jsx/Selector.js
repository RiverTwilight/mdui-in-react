import PropTypes from 'prop-types'
import React from 'react'

class Selector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dom:null
        }
    }
    componentDidMount(){
        var inst = new mdui.Select(this.selectDom);
        this.setState({dom: inst})
    }
    componentDidUpdate(){
        this.state.dom.handleUpdate()
    }
    render(){
        const {opt, val, onOptionChange} = this.props;
        return(
            <select 
                onChange={e=>{
                    onOptionChange(e.target.value)
                }}
                ref={r => this.selectDom = r}
                value={val} className="mdui-select" mdui-select='true'>
                {opt.map(a=>(
                    <option key={a.value} value={a.value}>{a.text}</option>
                ))}
            </select>
        )
    }
}

ListControlCheck.defaultProps = {
    icon: 'settings',
    onCheckedChange:()=>{}
}

ListControlCheck.propTypes={
    text:PropTypes.string.isRequired,
    checked:PropTypes.bool.isRequired,
    onCheckedChange:PropTypes.func,
    icon:PropTypes.string
}


