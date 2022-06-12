// const router = require('express').Router();
// var sequelize = require('sequelize');
// const { Plants, User, Favorites } = require('../../models');

// router.get('/:userid', (req, res) => {

//     // user the user id to get all the rows that have the same userid and then user the results plant ids to get alll the plants with those ids
//     Plants.findAll({
//         attributes: ['plant_id', 'plant_name'],
//         include: [
//             {
//                 model: User,
//                 through: Favorites,
//                 as: 'users'
//             }
//         ]
//     })
//         .then(plantData => { res.json(plantData) })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json(err)
//         })
// });

// router.get('/users', (req, res) => {
//     User.findAll({
//         attributes: ['user_id', 'email'],
//         include: [
//             {
//                 model: Plants,
//                 through: Favorites,
//                 as: 'favorite_plants'
//             }
//         ]
//     })
//         .then(userData => { res.json(userData) })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json(err)
//         })
// });

// router.get('/user/:id', (req, res) => {
//     User.findOne({
//         where: {
//             user_id: req.params.id
//         },
//         attributes: ['user_id', 'email'],
//         include: [
//             {
//                 model: Plants,
//                 through: Favorites,
//                 as: 'favorite_plants'
//             }
//         ]
//     })
//         .then(userData => {
//             if (!userData) {
//                 res.status(404).json({ message: 'Could not find an user with this id' })
//                 return
//             }
//             res.json(userData)
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json(err)
//         })
// });

// // this route will add the favorite plant ID to the list of favorites for a given user ID
// router.put('/:userId/:plantId', (req, res) => {
//     const favoriteArray = Favorites.user_id;
//     Favorites.create(
//         {
//             // Can't get this to work. We need to 'append' the plant ID number to the 'array' of favorite_plants
//             favorite_plants: favoriteArray.push(req.params.plantId)
//         },
//         {
//             where: {
//                 user_id: req.params.userId
//             }
//         }
//     )
//         .then(userData => {
//             if (!userData) {
//                 res.status(404).json({ message: 'Could not find matching user.' })
//                 return;
//             }
//             res.json(userData)
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json(err)
//         })
// });


// favorites:{
//     favoriteid:1
//     user:1,
//     favorite_plants:[]

// }

// favoriteid userid plantid favorite_plants
// 1            1       1      [1,2,3,4,5,6,7]



// router.post('/', (req, res) => {
//     const {userid,plantid}=req.body
//     Favorites.create(
//         {
//             // Can't get this to work. We need to 'append' the plant ID number to the 'array' of favorite_plants
//            user_id:userid,
//             plant_id:plantid
//         },
   
//     )
//         .then(userData => {
//             if (!userData) {
//                 res.status(404).json({ message: 'Could not find matching user.' })
//                 return;
//             }
//             res.json(userData)
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json(err)
//         })
// });



// Add another user favorites get route

// module.exports = router;