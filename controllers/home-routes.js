const router = require('express').Router();
const { Plants, User, Comment } = require('../models');

router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/dashboard', async (req, res) => {
  // show dashboard if logged in, otherwise, redirect to login page
  // if (req.session.loggedIn) {
    res.render('dashboard');
    // return;
  // }
  // res.redirect('/login');
});

router.get('/login', (req, res) => {
  // If already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/results', async (req, res) => {
  
  res.render('results');
});

module.exports = router;