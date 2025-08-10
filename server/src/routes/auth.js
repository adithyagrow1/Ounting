const express = require('express');
const router = express.Router();

// mock login -> accept any credentials, return mock token + user
router.post('/login', (req, res) => {
  const { email } = req.body;
  return res.json({ token: 'mock-token-123', user: { id: 1, name: 'Demo User', email: email || 'demo@user' }});
});

router.post('/signup', (req, res) => {
  const { email, name } = req.body;
  return res.json({ token: 'mock-token-123', user: { id: 2, name: name || 'New User', email: email || 'new@user' }});
});

module.exports = router;
