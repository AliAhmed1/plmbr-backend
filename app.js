const express = require('express');
require('dotenv').config();
const providerRoutes = require('./routes/providerRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const userRoutes = require('./routes/userRoutes');
const locationRoutes = require('./routes/locationRoutes');
const providerScheduleRoutes = require('./routes/providerScheduleRoutes');
const subCategoryRoutes = require('./routes/subCategoryRoutes');
const providerAvailabilityRoutes = require('./routes/providerAvailabilityRoutes');
const mainCategoryRoutes = require('./routes/mainCategoryRoutes');
const taskRoutes = require('./routes/taskRoutes');
const paymentMethodRoutes = require('./routes/paymentMethodRoutes');
const authRoutes = require('./routes/authRoutes');
const emailVerificationRoutes = require('./routes/emailVerificationRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();

app.use((req, res, next) => {
    const exemptedRoutes = ['/api/login', '/api/signup'];
    if (exemptedRoutes.includes(req.path)) {
        return next();
    }
    authMiddleware(req, res, next);
});

app.use(express.json());

app.use('/api', providerRoutes);
app.use('/api', serviceRoutes);
app.use('/api', bookingRoutes);
app.use('/api', userRoutes);
app.use('/api', locationRoutes);
app.use('/api', providerScheduleRoutes);
app.use('/api', subCategoryRoutes);
app.use('/api', mainCategoryRoutes);
app.use('/api', providerAvailabilityRoutes);
app.use('/api', taskRoutes);
app.use('/api', paymentMethodRoutes);
app.use('/api', authRoutes);
app.use('/api', emailVerificationRoutes);

app.use('/', (req, res) => {
    res.status(400).json('request is not allowed');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
