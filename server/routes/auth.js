const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

const router = express.Router();

// Registration Route
router.post('/register', async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});
  if (user) return res.status(400).json({error: 'Email already registered.'});

  const hash = await bcrypt.hash(password, 10);
  const newUser = new User({email, password: hash});
  await newUser.save();

  // Create activation token
  const activationToken = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: '1h'});
  const link = `http://localhost:${process.env.PORT}/auth/activate/${activationToken}`;

  await sendEmail(email, 'Activate your account', 
    `<h1>Activate Account</h1><a href="${link}">Click to Activate</a>`);

  res.json({message: 'Check your email for activation link.'});
});

// Activate Route
router.get('/activate/:token', async (req, res) => {
  try {
    const {email} = jwt.verify(req.params.token, process.env.JWT_SECRET);
    const user = await User.findOne({email});
    if (!user) return res.status(400).send('Invalid token');
    user.isActivated = true;
    await user.save();
    res.send('Account activated. You can now login.');
  } catch (error) {
    res.status(400).send('Invalid or expired activation link');
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const {email, password} = req.body;

  const user = await User.findOne({email});
  if (!user) return res.status(400).send('Invalid email or password');
  if (!user.isActivated) return res.status(400).send('Account not activated');

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).send('Invalid email or password');

  const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
  res.json({token});
});

// Protected Route
router.get('/dashboard', (req, res) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).send('No token.');

  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    res.json({message: 'Welcome to the Dashboard!', userId: payload.userId});
  } catch (error) {
    res.status(403).send('Invalid token');
  }
});

module.exports = router;
