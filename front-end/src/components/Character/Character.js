import React from 'react';
import './character.css';

const Character = ({ character }) => {
    return (
        <div className="character-container">
            <h2 className="character-name">{character.character_name}</h2>
            <p className="character-species">{character.character_species}</p>
        </div>
    );
};

export default Character;