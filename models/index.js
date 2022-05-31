// import all models
const Comment = require('./Comment');
const User = require('./User');
const Plants = require('./Plants')

// create associations
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.hasMany(Plants, {
    foreignKey: 'user_id'
});

Plants.hasMany(Comment, {
    foreignKey: 'comment_id'
});

module.exports = { User, Comment, Plants };