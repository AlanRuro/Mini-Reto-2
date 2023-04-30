import React from 'react';
import './cartoon.css';
import CharacterList from '../CharacterList/CharacterList';

const Cartoon = ({ cartoon }) => {
  return (
    <div className="cartoon-container">
      <h2 className="cartoon-name">{cartoon.cartoon_name}</h2>
      <p className="cartoon-channel"><b>Channel: </b>{cartoon.cartoon_channel}</p>
      <img className="cartoon-image" src={cartoon.cartoon_image} alt={cartoon.cartoon_name}></img>
      <CharacterList characters={cartoon.characters}></CharacterList>
    </div>
  );
};

export default Cartoon;