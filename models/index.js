// import all models
const Comment = require('./Comment');
const User = require('./User');
const Plants = require('./Plants');
const Favorites = require('./Favorites');

// create associations
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Plants.hasMany(Comment, {
    foreignKey: 'plant_id',
    onDelete: 'CASCADE'
});

User.hasOne(Favorites, {
    foreignKey: 'user_id'
});

Favorites.belongsTo(User, {
    foreignKey: 'favorites_id' 
});

Plants.belongsToMany(User, {
    through: Favorites,
    as: 'users',
    foreignKey: 'favorite_id'
})

User.belongsToMany(Plants, {
    through: Favorites,
    as: 'favorite_plants',
    foreignKey: 'favorite_id'
})

module.exports = { User, Comment, Plants, Favorites };