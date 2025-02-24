import React, { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import CreateGameForm from './components/CreateGameForm';
import JoinGameForm from './components/JoinGameForm';
import EarningsForm from './components/EarningsForm';

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

export default App;

import React from 'react';
import RegisterForm from './components/RegisterForm';

function App() {
    return (
        <div className="App">
            <h1>Poker Game</h1>
            <RegisterForm />
        </div>
    );
}

export default App;
