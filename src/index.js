import React from 'react'
import ReactDOM from 'react-dom'
import { TextInput } from '../index'

const test =  <TextInput
                    onTextChange={newText=>{
                    }}
                    header="输入AV号"
                    icon="link"
                    type="number"
                /> 
ReactDOM.render(test, document.getElementById('root'))