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
        sun_exposure: 'Medium to High Light',
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
    },
    {
        plant_name: 'Pink Princess',
        care_level: 'Medium Attention',
        sun_exposure: 'Medium to High Light',
        watering_schedule: 'Weekly',
        description: 'description about Pink Princess'
    },
    {
        plant_name: 'Snake Plant',
        care_level: 'Low Attention',
        sun_exposure: 'Low Light',
        watering_schedule: 'Monthly',
        description: 'description about Spider Plants'
    },
    {
        plant_name: 'Spider Plant',
        care_level: 'Low Attention',
        sun_exposure: 'Medium to High Light',
        watering_schedule: 'Weekly',
        description: 'description about Spice Plants'
    },
    {
        plant_name: 'Fiddle Leaf Fig',
        care_level: 'Medium Attention',
        sun_exposure: 'High Light',
        watering_schedule: 'Weekly',
        description: 'description about Fiddle Leaf Figs'
    },
    {
        plant_name: 'String of Pearls',
        care_level: 'Low Attention',
        sun_exposure: 'Medium Light',
        watering_schedule: 'Weekly',
        description: 'description about String of Pearls'
    },
    {
        plant_name: 'String of Bananas',
        care_level: 'Low Attention',
        sun_exposure: 'Medium Light',
        watering_schedule: 'Weekly',
        description: 'description about String of Bananas'
    },
    {
        plant_name: 'String of Turtles',
        care_level: 'Low Attention',
        sun_exposure: 'Medium Light',
        watering_schedule: 'Weekly',
        description: 'description about String of Turtles'
    },
    {
        plant_name: 'Prayer Plant',
        care_level: 'Low Attention',
        sun_exposure: 'Medium to High Light',
        watering_schedule: 'Weekly',
        description: 'description about Prayer Plants'
    },
    {
        plant_name: 'Rubber Tree',
        care_level: 'Low Attention',
        sun_exposure: 'Medium to High Light',
        watering_schedule: 'Weekly',
        description: 'description about Rubber Trees'
    },
    {
        plant_name: 'Air Plants',
        care_level: 'Low Attention',
        sun_exposure: 'High Light',
        watering_schedule: 'Monthly',
        description: 'description about Air Plants'
    },
    {
        plant_name: 'Peace Lily',
        care_level: 'Low Attention',
        sun_exposure: 'Medium Light',
        watering_schedule: 'Weekly',
        description: 'description about Peace Lilies'
    },
    {
        plant_name: 'Begonia',
        care_level: 'Low Attention',
        sun_exposure: 'Medium to High Light',
        watering_schedule: 'Weekly',
        description: 'description about Begonias'
    },
    {
        plant_name: 'Chinese Evergreen',
        care_level: 'Low Attention',
        sun_exposure: 'Low to Medium Light',
        watering_schedule: 'Weekly',
        description: 'description about Chinese Evergreens'
    },
    {
        plant_name: 'English Ivy',
        care_level: 'Low Attention',
        sun_exposure: 'Low to Medium Light',
        watering_schedule: 'Weekly',
        description: 'description about English Ivy'
    },
    {
        plant_name: 'Calathea',
        care_level: 'Low Attention',
        sun_exposure: 'Medium Light',
        watering_schedule: 'Weekly',
        description: 'description about Calatheas'
    },
    {
        plant_name: 'Swiss Cheese Plant',
        care_level: 'Medium Attention',
        sun_exposure: 'Medium to High Light',
        watering_schedule: 'Weekly',
        description: 'description about Swiss Cheese Plants'
    },
    {
        plant_name: 'Money Tree',
        care_level: 'Low Attention',
        sun_exposure: 'Medium to High Light',
        watering_schedule: 'Weekly',
        description: 'description about Money Trees'
    },
    {
        plant_name: 'Heartleaf Philodendron',
        care_level: 'Medium Attention',
        sun_exposure: 'Medium Light',
        watering_schedule: 'Weekly',
        description: 'description about Heartleaf Philodendrons'
    },
    {
        plant_name: 'Watermelon Peperomia',
        care_level: 'Low Attention',
        sun_exposure: 'Medium Light',
        watering_schedule: 'Weekly',
        description: 'description about Watermelon Peperomias'
    },
    {
        plant_name: 'Hoya Kerrii',
        care_level: 'Low Attention',
        sun_exposure: 'High Light',
        watering_schedule: 'Weekly',
        description: 'description about Hoya Kerrii'
    },
    {
        plant_name: 'Hope Peperomia',
        care_level: 'Low Attention',
        sun_exposure: 'Medium Light',
        watering_schedule: 'Weekly',
        description: 'description about Hope Peperomia'
    },
    {
        plant_name: 'Hoya Compacta',
        care_level: 'Low Attention',
        sun_exposure: 'Medium to High Light',
        watering_schedule: 'Weekly',
        description: 'description about Hoya Compacta'
    },
    {
        plant_name: 'Silver Philodendron',
        care_level: 'Low Attention',
        sun_exposure: 'Medium Light',
        watering_schedule: 'Weekly',
        description: 'description about Silver Philodendron'
    },
    {
        plant_name: 'Silver Sword Philodendron',
        care_level: 'High Attention',
        sun_exposure: 'Medium to High Light',
        watering_schedule: 'Weekly',
        description: 'description about Silver Sword Philodendron'
    },
    {
        plant_name: 'Birds of Paradise',
        care_level: 'Low Attention',
        sun_exposure: 'Medium to High Light',
        watering_schedule: 'Weekly',
        description: 'description about Birds of Paradise'
    },
    {
        plant_name: 'Aloe Vera',
        care_level: 'Low Attention',
        sun_exposure: 'High Light',
        watering_schedule: 'Bi-Weekly',
        description: 'description about Aloe Vera'
    },
    {
        plant_name: 'Maidenhair Fern',
        care_level: 'Low Attention',
        sun_exposure: 'Medium to High Light',
        watering_schedule: 'Weekly',
        description: 'description about Maidenhair Ferns'
    },
    {
        plant_name: 'Christmas Cactus',
        care_level: 'Low Attention',
        sun_exposure: 'Medium to High Light',
        watering_schedule: 'Weekly',
        description: 'description about Christmas Cactus'
    },
    {
        plant_name: 'Dracaena Corn Plant',
        care_level: 'Medium Attention',
        sun_exposure: 'Medium Light',
        watering_schedule: 'Weekly',
        description: 'description about Dracaena Corn Plants'
    },
    {
        plant_name: 'Majesty Palm',
        care_level: 'Low Attention',
        sun_exposure: 'Low to Medium Light',
        watering_schedule: 'Weekly',
        description: 'description about Majesty Palms'
    },
    {
        plant_name: 'Rattlesnake Plant',
        care_level: 'Low Attention',
        sun_exposure: 'Low to Medium Light',
        watering_schedule: 'Weekly',
        description: 'description about Rattlesnake Plants'
    },
    {
        plant_name: 'Green Velvet Alocasia',
        care_level: 'High Attention',
        sun_exposure: 'Medium to High Light',
        watering_schedule: 'Weekly',
        description: 'description about Green Velvet Alocasia'
    },
    {
        plant_name: 'Elephant Ears',
        care_level: 'Low Attention',
        sun_exposure: 'Medium to High Light',
        watering_schedule: 'Weekly',
        description: 'description about Elephant Ears'
    },
    {
        plant_name: 'Croton',
        care_level: 'Low Attention',
        sun_exposure: 'Medium Light',
        watering_schedule: 'Weekly',
        description: 'description about Crotons'
    },
    {
        plant_name: 'Parlor Palm',
        care_level: 'Low Attention',
        sun_exposure: 'Medium to High Light',
        watering_schedule: 'Weekly',
        description: 'description about Parlor Palms'
    },
    {
        plant_name: 'Wandering Jew',
        care_level: 'Medium Attention',
        sun_exposure: 'Medium Light',
        watering_schedule: 'Weekly',
        description: 'description about Wandering Jew'
    },
    {
        plant_name: 'Bunny Ear Cactus',
        care_level: 'Medium Attention',
        sun_exposure: 'Very High Light',
        watering_schedule: 'Monthly',
        description: 'description about Bunny Ear Cacti'
    },
    {
        plant_name: 'Balloon Cactus',
        care_level: 'Medium Attention',
        sun_exposure: 'Very High Light',
        watering_schedule: 'Monthly',
        description: 'description about Balloon Cacti'
    },
    {
        plant_name: 'Lady Finger Cactus',
        care_level: 'Medium Attention',
        sun_exposure: 'Very High Light',
        watering_schedule: 'Monthly',
        description: 'description about  Lady Finger Cacti'
    },
    {
        plant_name: 'Barrel Cactus',
        care_level: 'Medium Attention',
        sun_exposure: 'Very High Light',
        watering_schedule: 'Monthly',
        description: 'description about  Barrel Cacti'
    },
    {
        plant_name: 'African Milk Tree',
        care_level: 'Medium Attention',
        sun_exposure: 'Medium to High Light',
        watering_schedule: 'Bi-Weekly',
        description: 'description about African Milk Tree'
    },
    {
        plant_name: 'Jade Plant',
        care_level: 'Low Attention',
        sun_exposure: 'Medium to High Light',
        watering_schedule: 'Bi-Weekly',
        description: 'description about Jade Plants'
    },
    {
        plant_name: 'Dragon Tree',
        care_level: 'Low Attention',
        sun_exposure: 'Medium Light',
        watering_schedule: 'Weekly',
        description: 'description about Dragon Trees'
    },
    {
        plant_name: 'Sweetheart Hoya',
        care_level: 'Medium Attention',
        sun_exposure: 'High Light',
        watering_schedule: 'Bi-Weekly',
        description: 'description about Sweetheart Hoyas'
    },
    {
        plant_name: 'Anthurium',
        care_level: 'Low Attention',
        sun_exposure: 'Medium Light',
        watering_schedule: 'Weekly',
        description: 'description about Anthuriums'
    },
    {
        plant_name: 'Donkeys Tail',
        care_level: 'Low Attention',
        sun_exposure: 'High Light',
        watering_schedule: 'Bi-Weekly',
        description: 'description about  Donkeys Tail'
    }
];

const seedPlants = () => Plants.bulkCreate(plantData);

module.exports = seedPlants;