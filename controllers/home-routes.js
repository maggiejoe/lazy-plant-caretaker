const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Plants, User, Comment } = require('../models');

router.get('/', async (req, res) => {
  res.render('homepage', { loggedIn: req.session.loggedIn });
});

router.get('/dashboard', async (req, res) => {
  // show dashboard if logged in, otherwise, redirect to login page
  // if (req.session.loggedIn) {
    res.render('dashboard',{ loggedIn:req.session.loggedIn });
  //   return;
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

router.get('/sign-up', (req, res) => {
  res.render('sign-up');
});

router.get('/results', async (req, res) => {
  // need to link js file to this on how to display queried data
  res.render('results', { loggedIn: req.session.loggedIn });
});

// router.post('/logout', (req, res) => {
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res
//         .status(204)
//         .json({ message: 'You are now logged out!' })
//         .end();
//     });
//   } else {
//     res.status(400).end();
//   }
// });

module.exports = router;