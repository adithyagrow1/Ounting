const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/locations', (req, res) => {
    const data = JSON.parse(fs.readFileSync(__dirname + '/data/locations.json'));
    res.json(data);
});

app.listen(5000, () => console.log('Server running on port 5000'));
