const router = require('express').Router();
const { Plants, User, Comment } = require('../../models');

// get all users
router.get('/', (req, res) => {
  Plants.findAll({})
    .then(plantData => res.json(plantData))
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
  .then(plantData => {
    if (!plantData) {
      res.status(404).json({ message: 'No plants were found with this criteria' });
      return;
    }
    res.json(plantData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})

// router.put('/favorite/: userId -: plantId', (req, res) => {
  // used to add plant to the list of favorites for given user
  // User.findOne({
  //   where: {
  //     user_id: req.params.userId
  //   }
  // })
  // .then
  // should we do an update to the plants model to add user id as a foreign key?
// });

router.get('/:id', (req, res) => {
  Plants.findOne({
    where: {
      plant_id: req.params.id
    },
    include: [Comment]
  })
    .then(plantData => {
      if (!plantData) {
        res.status(404).json({ message: 'No plant found with this id' });
        return;
      }
      res.json(plantData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;