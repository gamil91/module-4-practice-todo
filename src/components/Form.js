import React, { Component } from 'react' 

export default class Form extends Component {

    constructor(){
        super()
        this.state = {
            value: ""
        }
    }

    renderSelect = () => {
        let filtered = this.props.categories.filter(c => c !== "All")

        return ( 
            <select name="category">
                {filtered.map(c => {
                    return <option>{c}</option>
                })}
            </select>
        )
        }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTask(this.state.value, e.target.category.value)
        this.setState({value: ""})
    }

    render(){
        return(
        <form className="new-task-form" onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" placeholder="New task details" value={this.state.value}></input>
                {this.renderSelect()}
                <input type="submit" value="Add task"></input>
        </form>

        )
    }



}