import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'




class App extends Component{
    state ={
        character: []
        
    }
    removeCharacter = index => {
        const { character } = this.state;
      
        this.setState({
          character: character.filter((characters, i) => {
            return i !== index;
          }),
        })
      }
      handleSubmit = characters => {
        this.setState({ character: [...this.state.character, characters] })
      }
    
    render(){
        const { character } = this.state;
        return(
            <div className = "container" >
                <Table characterData = {character} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit} />
            </div>


        )

    }
}

export default App