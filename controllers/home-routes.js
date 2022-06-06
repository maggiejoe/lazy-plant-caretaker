const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Plants, User, Comment } = require('../models');
const plantData = require('../public/js/search-results');

router.get('/', async (req, res) => {
  res.render('homepage', { loggedIn: req.session.loggedIn });
});

router.get('/dashboard', async (req, res) => {
  // show dashboard if logged in, oth /erwise, redirect to login page
  if (req.session.loggedIn) {
    res.render('dashboard',{ loggedIn:req.session.loggedIn });
    return;
  }
  res.redirect('/login');
});

router.get('/login', (req, res) => {
  // If already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/sign-up', (req, res) => {
  res.render('sign-up');
});

router.get('/results', async (req, res) => {
  // need to link js file to this on how to display queried data
  const results = plantData;
  res.render('results', { loggedIn: req.session.loggedIn , results: results });
});

module.exports = router;