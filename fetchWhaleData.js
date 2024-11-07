// api/fetchWhaleData.js
import fetch from 'node-fetch';

export default async (req, res) => {
    try {
        // Fetch data from the Heroku URL
        const response = await fetch('https://polar-forest-37781-28ce69ff7921.herokuapp.com/');
        if (!response.ok) throw new Error('Network response was not ok');

        // Parse JSON data
        const data = await response.json();
        // Send data back to the client
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};
