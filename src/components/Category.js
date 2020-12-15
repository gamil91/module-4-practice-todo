import React, { Component } from 'react' 


export default class Category extends Component {


    render(){
        return(<button onClick={ this.props.click} className={this.props.selected ? "selected" : null}>{this.props.text}</button>)

    }


}

