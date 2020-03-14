import React from 'react';

class ToTop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isHide:true
        }
    }
    componentDidMount(){
        window.addEventListener("scroll",e => {
            var t = document.documentElement.scrollTop || document.body.scrollTop;
            if(t <= 148){
                this.setState({isHide:true})
            }else{
                this.setState({isHide:false})
            }
        })
    }
    componentWillUnmount(){
        window.removeEventListener("scroll",()=>{})
    }
    render(){
        const { isHide } = this.state
        return(
            <button 
                onClick={()=>window.location.href="#"} 
                className={`mdui-color-theme mdui-fab mdui-fab-fixed ${isHide?'mdui-fab-hide':''}`}>
                <i className="mdui-icon material-icons">&#xe5d8;</i>
            </button>
        )
    }
}

module.exports = ToTop