// const { Model, DataTypes } = require('sequelize');

// const sequelize = require('../config/connection');

// class Favorites extends Model { }

// Favorites.init(
//     {
//         favorite_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         // favorite_plants: {
//         //     type: DataTypes.STRING,
//         //     defaultValue: '[]'
//         // },
//         user_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'user',
//                 key: 'user_id'
//             }
//         },
//         plant_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'plants',
//                 key: 'plant_id'
//             }
//         }
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'favorites'
//     }
// );

// module.exports = Favorites;