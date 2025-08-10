const express = require('express');
const cors = require('cors');
const locationsRouter = require('./routes/locations');
const authRouter = require('./routes/auth');
const bookingsRouter = require('./routes/bookings');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/locations', locationsRouter);
app.use('/api/auth', authRouter);
app.use('/api/bookings', bookingsRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`Outingo mock API listening on http://localhost:${PORT}/api`));
