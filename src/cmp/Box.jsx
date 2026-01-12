import React, { useState } from "react";
import Sq from "./Sq";

function Box() {
    const [turn, setTurn] = useState(true);
    const [State, setState] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState(false); 

    const Valid = (board) => {
        const wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ];

        for (let [a, b, c] of wins) {
            if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                return board[a]; 
            }
        }
        return null;
    };

    const handleCilck = (index) => {
        if (State[index] || winner) return;

        const costState = [...State];
        costState[index] = turn ? "X" : "O";
        setState(costState);

        const win = Valid(costState); 
        if (win) setWinner(win);

        setTurn(!turn);
    };
    
  const reset = () => {
    setWinner(null);                 
    setState(Array(9).fill(null));   
    setTurn(true);                   
};


    return (
        <div className="Box-container">
            {winner ? (
                <div>
                <h1>{winner} Wins 🎉</h1>
                <button onClick={() => reset()} className="Button">Play Again</button>
                </div>
            ) : (
                <>
                    <h2>Turn: {turn ? "X" : "O"}</h2>
                    <div className="box-row">
                        <Sq value={State[0]} onClick={() => handleCilck(0)} />
                        <Sq value={State[1]} onClick={() => handleCilck(1)} />
                        <Sq value={State[2]} onClick={() => handleCilck(2)} />
                    </div>

                    <div className="box-row">
                        <Sq value={State[3]} onClick={() => handleCilck(3)} />
                        <Sq value={State[4]} onClick={() => handleCilck(4)} />
                        <Sq value={State[5]} onClick={() => handleCilck(5)} />
                    </div>

                    <div className="box-row">
                        <Sq value={State[6]} onClick={() => handleCilck(6)} />
                        <Sq value={State[7]} onClick={() => handleCilck(7)} />
                        <Sq value={State[8]} onClick={() => handleCilck(8)} />
                    </div>
                </>
            )}
        </div>
    );
}

export default Box;
