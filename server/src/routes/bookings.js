const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // echo back the booking with an id
  const booking = Object.assign({ id: Math.floor(Math.random()*10000) }, req.body);
  return res.json({ success: true, booking });
});

module.exports = router;
