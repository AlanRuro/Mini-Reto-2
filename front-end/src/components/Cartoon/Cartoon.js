import React from 'react';
import './cartoon.css';
import CharacterList from '../CharacterList/CharacterList';

const Cartoon = ({ cartoon }) => {
  return (
    <div className="cartoon-container">
      <h2 className="cartoon-title">{cartoon.cartoon_name}</h2>
      <p className="cartoon-desc">{cartoon.cartoon_channel}</p>
      <CharacterList characters={cartoon.characters}></CharacterList>
    </div>
  );
};

export default Cartoon;