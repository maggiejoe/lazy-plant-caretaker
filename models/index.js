// import all models
const Comment = require('./Comment');
const User = require('./User');
const Plants = require('./Plants');
// const Favorites = require('./Favorites');

// create associations
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

User.hasMany(Plants, {
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

module.exports = { User, Comment, Plants };