const { Plants } = require('../models');

const plantData = [
    {
        plant_name: 'Pothos',
        care_level: 'Low Attention',
        sun_exposure: 'Low to Medium Light',
        watering_schedule: 'Weekly',
        description: 'description about Pothos'
    },
    {
        plant_name: 'ZZ Plant',
        care_level: 'Low Attention',
        sun_exposure: 'Low to Medium Light',
        watering_schedule: 'Bi-Weekly',
        description: 'description about ZZ Plants'
    },
    {
        plant_name: 'Monstera',
        care_level: 'Medium Attention',
        sun_exposure: 'Low to High Light',
        watering_schedule: 'Weekly',
        description: 'description about monsteras'
    },
    {
        plant_name: 'Pilea',
        care_level: 'Medium Attention',
        sun_exposure: 'Medium Light',
        watering_schedule: 'Weekly',
        description: 'description about Pileas'
    },
    {
        plant_name: 'Brazil Philodendron',
        care_level: 'Low Attention',
        sun_exposure: 'Medium Light',
        watering_schedule: 'Bi-Weekly',
        description: 'description about Brazil Philodendrons'
    }
];

const seedPlants = () => Plants.bulkCreate(plantData);

module.exports = seedPlants;