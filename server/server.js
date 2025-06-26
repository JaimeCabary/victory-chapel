const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const passport = require('./auth/passport');
const authRoutes = require('./routes/auth');

dotenv.config();
const app = express();

app.use(express.json());
app.use(require('cors')());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected!');
}).catch(console.error);

app.use('/auth', authRoutes);

// Google Auth Route
const passportGoogle = require('passport');
app.get('/auth/google',
  passportGoogle.authenticate('google', {scope: ['profile','email']})
);

app.get('/auth/google/callback',
  passportGoogle.authenticate('google', {failureRedirect: '/sign-in'}),
  (req, res) => {
    res.send('Google Sign-In Successful. You can now redirect to the Dashboard!');
  }
);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
