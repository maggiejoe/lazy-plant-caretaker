const router = require('express').Router();
const { Plants, User, Comment } = require('../../models');

// get all users
router.get('/', (req, res) => {
  Plants.findAll({})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Find plant based off of specific criteria
router.get('/query', (req, res) => {
  console.log(req.query);
  Plants.findAll({
    where:{
      sun_exposure: req.query.sun_exposure,
      care_level: req.query.care_level
    }
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No plants were found with this criteria' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})


router.get('/:id', (req, res) => {
  Plants.findOne({
    where: {
      id: req.params.id
    },
    include: [Comment]
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No plant found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
