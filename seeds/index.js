const seedPlants = require('./plant-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('DATABASED SYNCED');

    await seedPlants();
    console.log('PLANTS SEEDED');

    process.exit(0);
};

seedAll();