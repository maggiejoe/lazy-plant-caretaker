const router = require('express').Router();
var sequelize = require('sequelize');
const { Plants, User, Favorites } = require('../../models');

router.get('/', (req, res) => {
    Plants.findAll({
        attributes: ['plant_id', 'plant_name'],
        include: [
            {
                model: User,
                through: Favorites,
                as: 'users'
            }
        ]
    })
        .then(plantData => { res.json(plantData) })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
});

router.get('/users', (req, res) => {
    User.findAll({
        attributes: ['user_id', 'email'],
        include: [
            {
                model: Plants,
                through: Favorites,
                as: 'favorite_plants'
            }
        ]
    })
        .then(userData => { res.json(userData) })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
});

router.get('/user/:id', (req, res) => {
    User.findOne({
        where: {
            user_id: req.params.id
        },
        attributes: ['user_id', 'email'],
        include: [
            {
                model: Plants,
                through: Favorites,
                as: 'favorite_plants'
            }
        ]
    })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'Could not find an user with this id' })
                return
            }
            res.json(userData)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
});

// this route will add the favorite plant ID to the list of favorites for a given user ID
router.put('/:userId/:plantId', (req, res) => {
    const favoriteArray = Favorites.user_id;
    Favorites.update(
        {
            // Can't get this to work. We need to 'append' the plant ID number to the 'array' of favorite_plants
            favorite_plants: favoriteArray.push(req.params.plantId)
        },
        {
            where: {
                user_id: req.params.userId
            }
        }
    )
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'Could not find matching user.' })
                return;
            }
            res.json(userData)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
});

module.exports = router;