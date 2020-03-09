import PropTypes from 'prop-types'
import React from 'react'
import mdui from 'mdui'

class Select extends React.Component {
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
        //保留平滑切换动画
        setTimeout(()=>this.state.dom.handleUpdate(),100)
    }
    render(){
        const {options, value, onOptionChange} = this.props;
        return(
            <select 
                onChange={e=>{
                    onOptionChange(e.target.value)
                }}
                ref={r => this.selectDom = r}
                value={value} className="mdui-select">
                {options.map(a=>(
                    <option key={a.value} value={a.value}>{a.name}</option>
                ))}
            </select>
        )
    }
}

Select.defaultProps = {
    onOptionChange:()=>{}
}

Select.propTypes = {
    options:PropTypes.arrayOf(PropTypes.object).isRequired,
    value:PropTypes.string.isRequired,
    onOptionChange:PropTypes.func.isRequired
}

module.exports = Select
