import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import CreateGameForm from './components/CreateGameForm';
import JoinGameForm from './components/JoinGameForm';
import EarningsForm from './components/EarningsForm';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Poker Game</h1>
                <Routes>
                    {/* Define routes for different pages */}
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/join-game" element={<JoinGameForm />} />
                    <Route path="/earnings" element={<EarningsForm />} />
                    <Route exact path="/" element={<HomePage />} /> {/* Home page with links to navigate */}
                </Routes>
            </div>
        </Router>
    );
}

// A simple Home page with links to navigate
function HomePage() {
    return (
        <div>
            <h2>Welcome to the Poker Game!</h2>
            <nav>
                <ul>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/join-game">Join Game</a></li>
                    <li><a href="/earnings">Enter Earnings</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default App;
