// api/fetchWhaleData.js
import fetch from 'node-fetch';

export default async (req, res) => {
    try {
        const response = await fetch('https://polar-forest-37781-28ce69ff7921.herokuapp.com/');
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};
