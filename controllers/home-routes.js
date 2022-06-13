const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Plants, User, Comment } = require('../models');
// const plantData = require('../public/js/search-results');

router.get('/', async (req, res) => {
  res.render('homepage', { loggedIn: req.session.loggedIn });
});

router.get('/dashboard', async (req, res) => {
  // show dashboard if logged in, otherwise, redirect to login page
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
  Plants.findAll({
    where: {
      sun_exposure: req.query.sun_exposure,
      care_level: req.query.care_level
    }
  })
    .then(plantData => {
      if (!plantData) {
        res.status(404).json({ message: 'No plants were found with this criteria' });
        return;
      }
      const results = plantData.map(plant => plant.get({ plain: true }));
      res.render('results', { loggedIn: req.session.loggedIn, results });
    })
});

module.exports = router;