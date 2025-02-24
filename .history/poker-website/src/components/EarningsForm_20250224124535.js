import React, { useState } from 'react';

function EarningsForm() {
    const [earnings, setEarnings] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Earnings submitted:', earnings);
        // You can send this earnings data to the backend here.
    };

    return (
        <section id="earnings">
            <h2>Enter Your Earnings</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="earnings">Earnings:</label>
                <input
                    type="number"
                    id="earnings"
                    value={earnings}
                    onChange={(e) => setEarnings(e.target.value)}
                    required
                    placeholder="Enter your earnings"
                />
                <button type="submit">Submit Earnings</button>
            </form>
        </section>
    );
}

export default EarningsForm;
