import React from 'react';
import './character.css';

const Character = ({ character }) => {
    return (
        <div className="character-container">
            <div className='character-description'>
                <h2 className="character-name">{character.character_name}</h2>
                <p className="character-species"><b>Species: </b>{character.character_species}</p>
            </div>
            <img className='character-image' src={character.character_image} alt={character.character_name}></img>
        </div>
    );
};

export default Character;