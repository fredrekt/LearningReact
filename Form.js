import React, { Component } from 'react'

class Form extends Component{
    handleChange = event => {
        const { name, value } = event.target
      
        this.setState({
          [name]: value,
        })
      }




    constructor(props){
        super(props)
        this.initialState = {
            name: '',
            job: '',
        }
        this.state = this.initialState
    }
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
      }
    render(){
        const { name, job} = this.state

        return(
            <form>
                <input placeholder = 'Enter Name'type='text'name='name'value={name} onChange={this.handleChange}/>
                <br />
                <input placeholder = 'Enter Job' type='text'name='job'value={job} onChange={this.handleChange}/>
                <br />
                <input  type="button" value="Submit" onClick={this.submitForm} />
            </form>

        );
    }
}

export default Form;