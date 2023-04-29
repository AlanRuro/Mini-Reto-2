import React from "react";
//import "./cartoonList.css";
import Character from "../Character/Character";
import './characterList.css';

function CharacterList({ characters }) {
    return (
            <div >
                {characters.map((character, index) => {
                    return <Character key={index} character={character} />;
                })}
            </div>
    );
}

export default CharacterList;