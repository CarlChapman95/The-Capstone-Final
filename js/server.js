const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));

app.get('/api/caloriesburned', async (req,res) => {
    const { activity } = req.query;
    try {
        const response = await axios.get('https://api.api-ninjas.com/v1/caloriesburned', {
            params: { activity },
            headers: { 'X-Api-Key': process.env.API_KEY }
        });
        res.json(response.data);
    } catch (error) {
        console.error('API error:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});