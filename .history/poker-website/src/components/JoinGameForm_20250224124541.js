import React, { useState } from 'react';

function JoinGameForm() {
    const [gameCode, setGameCode] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Joining game with code:', gameCode);
        // Here, you can verify the game code with the backend and allow the player to join the game.
    };

    return (
        <section id="join-game">
            <h2>Join Game</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="gameCode">Enter Game Code:</label>
                <input
                    type="text"
                    id="gameCode"
                    value={gameCode}
                    onChange={(e) => setGameCode(e.target.value)}
                    required
                    placeholder="Enter the game code"
                />
                <button type="submit">Join Game</button>
            </form>
        </section>
    );
}

export default JoinGameForm;
