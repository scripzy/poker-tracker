import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import CreateGameForm from './components/CreateGameForm';
import JoinGameForm from './components/JoinGameForm';
import EarningsForm from './components/EarningsForm';
import HomePage from './components/HomePage'; // Import the updated HomePage

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Poker Game</h1>
                <Routes>
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/join-game" element={<JoinGameForm />} />
                    <Route path="/earnings" element={<EarningsForm />} />
                    <Route path="/" element={<HomePage />} /> {/* Home page route */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
