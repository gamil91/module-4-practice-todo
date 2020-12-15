import React, { Component } from 'react' 

export default class Task extends Component {


    render(){
        return(
            <div className="task">
                <div className="label">{this.props.task.category}</div>
                <div className="text">{this.props.task.text}</div>
                <button onClick={() => this.props.delete(this.props.task.text)}  className="delete">X</button>
            </div>

        )
    }



}