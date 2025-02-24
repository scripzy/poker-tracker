import React from 'react';
import RegisterForm from './components/RegisterForm';
import CreateGameForm from './components/CreateGameForm';
import JoinGameForm from './components/JoinGameForm';
import EarningsForm from './components/EarningsForm';

function App() {
    return (
        <div className="App">
            <h1>Devil's Hand Tracker</h1>
            {/* You can render components directly now */}
            <RegisterForm />
            <JoinGameForm />
            <EarningsForm />
        </div>
    );
}

export default App;
