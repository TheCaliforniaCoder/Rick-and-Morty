import React, { Component } from 'react';
import './Character.css';

class Character extends Component{
onClick = (e) => {
    const character = {
        name: this.props.name,
        status: this.props.status,
        species: this.props.species,
        origin: this.props.origin,
        location: this.props.location,
        image: this.props.image
    }
   this.props.addToFavorite(character)
}   

delete = (e) => {
    const character = {
        name: this.props.name,
        status: this.props.status,
        species: this.props.species,
        origin: this.props.origin,
        location: this.props.location
    }
    this.props.deleteCharacter(character)
}


render(){
    return (
        <div className='container'>
            <div id='char' className='text'>
                <h2>Name: {this.props.name}</h2>
                <h3>Status: {this.props.status}</h3>
                <h3>Species: {this.props.species}</h3>
                <h3>Origin: {this.props.origin}</h3>
                <h3>Location: {this.props.location}</h3>

                <img className="images" alt="characters" src={this.props.image}/>
            </div>
            <div>
                <button className='buttons' onClick={this.onClick}>Add to Favorites</button> 
                <button className='buttons' onClick={this.delete}>Remove Character</button>
                <button className='buttons' onClick={this.props.changeName}>Edit Name</button>
            </div>
            
        </div>
    )
}
}

export default Character;