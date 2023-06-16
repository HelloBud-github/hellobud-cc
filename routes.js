// routes.js
const express = require('express');
const router = express.Router();
const { registerHandler, loginHandler, logoutHandler } = require('./handler');

// Register route
router.post('/register', registerHandler);

// Login route
router.post('/login', loginHandler);

// Logout route
router.post('/logout', logoutHandler);



module.exports = router;
