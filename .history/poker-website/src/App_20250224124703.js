import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import CreateGameForm from './components/CreateGameForm';
import JoinGameForm from './components/JoinGameForm';
import EarningsForm from './components/EarningsForm';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Poker Game</h1>
                <Switch>
                    {/* Define routes for different pages */}
                    <Route path="/register" component={RegisterForm} />
                    <Route path="/join-game" component={JoinGameForm} />
                    <Route path="/earnings" component={EarningsForm} />
                    <Route exact path="/" component={HomePage} /> {/* Home page with links to navigate */}
                </Switch>
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
