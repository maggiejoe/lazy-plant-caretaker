const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const commentRoutes = require('./comment-routes');
const plantRoutes = require('./plants-routes');
// const favoritesRoutes = require('./favorites-routes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/plants', plantRoutes);
// router.use('/favorites', favoritesRoutes);

module.exports = router;