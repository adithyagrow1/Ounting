const express = require('express');
const router = express.Router();
const data = require('../data/locations.json');

// GET /api/locations?q=...
router.get('/', (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  let results = data;
  if(q){
    results = data.filter(d => d.title.toLowerCase().includes(q) || d.city.toLowerCase().includes(q));
  }
  res.json(results);
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const found = data.find(d => d.id === id);
  if(!found) return res.status(404).json({error: 'Not found'});
  res.json(found);
});

module.exports = router;
