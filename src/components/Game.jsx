import React, {useState} from "react";

function Game(){

const [score, setScore] = useState(0);

    return (
    <div>
        <h1>Game Score: {score}</h1>
        <button style={{backgroundColor : "blue", color:"white"}} onClick={() => setScore(score + 1)}>Increase Score</button>
        <button style={{backgroundColor : "red", color:"white", marginLeft: "10px"}} onClick={() => setScore(score - 1)}>Decrease Score</button>
      
    </div>
    )
}
export default Game;