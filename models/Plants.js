const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Plants extends Model {}

Plants.init(
    {
        plant_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        plant_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        care_level: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sun_exposure: {
            type: DataTypes.STRING,
            allowNull: false
        },
        watering_schedule: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(1024),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        favorites_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'favorites',
                key: 'favorite_id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'plants'
    }
);

module.exports = Plants;