import React from 'react'
import PropTypes from 'prop-types'
import mdui from 'mdui'
import RangeInput from './RangeInput'

/**
  *音乐播放器组件
  **/

/***必须要class组件，因为需要用到Ref***/
class MusicPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			onPlay:false,
			playProgress:0,
		}
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.audio) {
			var {
				audio
			} = this.refs;
			audio.load();
			audio.addEventListener('play', () => {
				this.setState({
					audioLength: Math.round(audio.duration)//设置音频总长度
				})
				window.progress = setInterval(() => {
					this.setState({
						playProgress: audio.currentTime
					})
					mdui.updateSliders()//调整滑块长度
				}, 100)
			})
			audio.addEventListener('ended', () => {
				clearInterval(window.progress)
				this.setState({
					onPlay: false
				})
			})
		}
	}
	render(){
		const { audio } = this.props;
		const { onPlay, playProgress, audioLength } = this.state
		const { audio } = this.refs 
		return(
			<React.Fragment>
				<div className="mdui-card mdui-p-a-1">
				<h3 className="mdui-typo-title">{this.props.title}</h3>
					<RangeInput 
					    value={String(playProgress)}
						min="0" max={String(audioLength)}
						onValueChange={newValue=>{
							this.setState({playProgress:newValue})
							audio.currentTime = newValue
						}}
				    />	
				    <center>
						<div className="mdui-btn-group">
						    <button 
							    onClick={()=>{
									if (onPlay) {
										audio.pause();
										this.setState({
											onPlay: false
										})
									} else {
										audio.play();
										this.setState({
											onPlay: true
										})
									}
							    }}
							    type="button" className="mdui-btn">
							    <i className="mdui-icon material-icons">{(onPlay)?'pause':'play_arrow'}</i>
							</button>
						    <a
							    type="button" 
							    target="_blank" download href={audio}
							    className="mdui-btn">
							    <i className="mdui-icon material-icons">file_download</i>
							</a>
						</div>
					</center>
				   	<audio ref="audio" style={{display:'none'}} controls="controls">
					    <source src={this.props.audio} type="audio/mpeg"/>
					    Your browser does not support the audio tag.
					</audio>
			    </div>
			</React.Fragment>
		)
	}
}

MusicPlayer.defaultProps = {

}

MusicPlayer.propTypes={

}

export default MusicPlayer