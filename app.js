const express = require('express');
require('dotenv').config();
const providerRoutes = require('./routes/providerRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

app.use(express.json());

app.use('/api', providerRoutes);
app.use('/api', serviceRoutes);
app.use('/api', bookingRoutes);
app.use('/', (req, res) => {
    res.status(200).json('hello world');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
