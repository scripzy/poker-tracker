import React from 'react';
import RegisterForm from './components/RegisterForm'; // Default import
import CreateGameForm from './components/CreateGameForm'; // Default import
import JoinGameForm from './components/JoinGameForm'; // Default import
import EarningsForm from './components/EarningsForm'; // Default import

function App() {
    return (
        <div className="App">
            <h1>Poker Game</h1>
            <RegisterForm />
            <CreateGameForm />
            <JoinGameForm />
            <EarningsForm />
        </div>
    );
}

export default App;  // Default export
