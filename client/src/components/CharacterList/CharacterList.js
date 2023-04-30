import React from "react";
import Character from "../Character/Character";
import './characterList.css';

function CharacterList({ characters }) {
    return (
        <div className="characters-list">
            <p className="characters-title">Characters</p>
            {characters.map((character, index) => {
                return <Character key={index} character={character} />;
            })}
        </div>
    );
}

export default CharacterList;