const express = require('express');
require('dotenv').config();
const providerRoutes = require('./routes/providerRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const userRoutes = require('./routes/userRoutes');
const locationRoutes = require('./routes/locationRoutes');
const providerScheduleRoutes = require('./routes/providerScheduleRoutes');
const subCategoryRoutes = require('./routes/subCategoryRoutes');

const app = express();

app.use(express.json());

app.use('/api', providerRoutes);
app.use('/api', serviceRoutes);
app.use('/api', bookingRoutes);
app.use('/api', userRoutes);
app.use('/api', locationRoutes);
app.use('/api', providerScheduleRoutes);
app.use('/api', subCategoryRoutes);


app.use('/', (req, res) => {
    res.status(200).json('hello world');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
