const { Plants } = require('../models');

const plantData = [
    {
        plant_name: '',
        care_level: '',
        sun_exposure: '',
        description: ''
    },
    {
        plant_name: '',
        care_level: '',
        sun_exposure: '',
        description: ''
    },
    {
        plant_name: '',
        care_level: '',
        sun_exposure: '',
        description: ''
    },
    {
        plant_name: '',
        care_level: '',
        sun_exposure: '',
        description: ''
    },
    {
        plant_name: '',
        care_level: '',
        sun_exposure: '',
        description: ''
    }
];

const seedPlants = () => Plants.bulkCreate(plantData);

module.exports = seedPlants;