const { Plants } = require('../models');

const plantData = [
    {
        plant_name: 'Pothos',
        care_level: 'Very Lazy',
        sun_exposure: 'Low Light',
        watering_schedule: 'Weekly',
        description: "Pothos and its varieties, also known as 'epipremnum aureum' is an evergreen vine with thick waxy leaves. As an indoor plant, it is commonly a hanging plant but can also grow upwards with support using it's aerial roots. These beautiful plants come in many different varieties and are great in every lighting condition! Ontop of that, they're perfect for new plant parents as they're nearly impossible to kill!",
        image: 'https://www.plantandflowerinfo.com/images/pothos-marble-queen-plant.jpg'
    },
    {
        plant_name: 'ZZ Plant',
        care_level: 'Very Lazy',
        sun_exposure: 'Low Light',
        watering_schedule: 'Bi-Weekly',
        description: "The ZZ Plant, also known as ' zamioculcas zamiifolia' has become one of the most common house plants because of how tolerant it is in a wide range of conditions. It's thick waxy leaves that start a bright lime color in their youth turn an emerald green as they mature. If you're looking for a plant that needs next to no care, look no further!",
        image: 'https://www.plantandflowerinfo.com/images/zz-plant-indoor-house-plant300250.jpg'
    },
    {
        plant_name: 'Monstera',
        care_level: 'Somewhat Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "Monsteras, also known as 'monstera deliciosa' are a great addition to any home with bright indirect light. they're glossy perforated leaves add beautiful texture to any space. They're climbing plants that use aerial roots to climb whatever they're provided with. In tropical forests, they're leaves are known to get up to 35in long and 30in wide!",
        image: 'https://garden.org/pics/2019-03-21/DaylilySLP/28fe48-250.jpg'
    },
    {
        plant_name: 'Pilea',
        care_level: 'Somewhat Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The pilea, or it's scientific name, 'pilea peperomioides' has beautiful shiny dark green circular leaves. It requires bright indirect light to grow well and in low light conditions may loose leaves. When it comes to watering, it likes its soil to be nearly dried out before it's next drink, and will always tell you when it needs water when the leaves droop and/or curl. Pilea's are great to pass along to friends and family as they're always producing new babies or pups that can be easily extracted from the soil and repotted.",
        image: 'https://garden.org/pics/2021-10-05/Leafa/4cacb4-250.jpg'
    },
    {
        plant_name: 'Brasil Philodendron',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Bi-Weekly',
        description: "'Philodendron hederaceum' or brasil philodendron is a variety of the heartleaf philodendron known for it's lime green and deep green leaves. It is also a trailing plant that commonly hangs as an indoor plant but can be a climbing plant is given a moss pole to attach too. In order to maintain growth, this houseplant needs bright indirect light to thrive and depending on it's soil can be watered weekly to bi-weekly. This fun colorful plant would make a great addition to any space!",
        image: 'https://www.plantandflowerinfo.com/images/philodendron-silver-trailing-house-plant.jpg'
    },
    {
        plant_name: 'Pink Princess',
        care_level: 'Not Lazy At All',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The pink princess philodendron or 'Philodendron Erubescens' is known for it's beautifully colorful leaves. In the right conditions, it's leaves can have different shades of pink, white and green. This unique houseplant is considered more exotic as it's hard to find and can be very costly based off of the maturity you purchase it at. It's known to be more difficult to take care of and isn't recommended for new plant parents looking to start their indoor plant collection. For the more experienced plant parent, this is a great challenge plant to see if you can give it the right conditions to continue to produce those beautifully pink varigated leaves.",
        image: 'https://garden.org/pics/2021-06-17/Joy/9e1c61-250.jpg'
    },
    {
        plant_name: 'Snake Plant',
        care_level: 'Very Lazy',
        sun_exposure: 'Low Light',
        watering_schedule: 'Monthly',
        description: "Snake plants, or 'sansevieria' (a.k.a. mother-in-laws tongue) are perfect for low light to bright light conditions. Their hearty sword like leaves come in a variety of different colors and can grow over two feet tall. They are the perfect plant to put anywhere and forget about. These nearly indestructible plants need next to no water and minimal light to survive, making them perfect for your first indoor house plant.",
        image: 'https://www.plantandflowerinfo.com/images/snake-plant-in-pot.jpg'
    },
    {
        plant_name: 'Spider Plant',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "'Chlorophytum comosum' or more commonly known as the spider plant, are a very popular indoor houseplant. They're beautiful leaves and different varieties make them a great addition to any space. In bright indirect light, they'll thrive in growth and product lots of babies (a.k.a. pups) what you can easily cut off and propogate to make more plants. They like to dry out inbetween waterings but you'll always know when they need a drink when they're leaves become slightly discolored.",
        image: 'https://www.plantandflowerinfo.com/images/spider-plant-on-table.jpg'
    },
    {
        plant_name: 'Fiddle Leaf Fig',
        care_level: 'Not Lazy At All',
        sun_exposure: 'Direct Light',
        watering_schedule: 'Weekly',
        description: "Fiddle leaf fig plants are apart of the ficus family with a scientific name of 'ficus lyrata'. It has large violin shaped emerald green leaves that grow upright into a tall plant, resembling a tree. While it can be tricky to grow at first, if you place them infront of a brightly lit window and leave them, they will grow tall and strong for you. When it comes to watering, be sure to let the soil nearly dry out before it's next drink as it's roots do not like sitting in water. If you're looking for a unique plant to add some life to your space, the fiddle leaf fig the perfect plant for you!",
        image: 'https://garden.org/pics/2012-01-11/Paul2032/84efbf-250.jpg'
    },
    {
        plant_name: 'String of Pearls',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "String of pearls, or 'senecio rowleyanus' is a beautiful hanging plant can door from anywhere on it's vine as long as it's found soil to grow into. This plant loves a high drainage soil and does not like it's roots sitting in water as it's apart of the succulent family. Because of this, it likes to let it's soil dry out inbetween waterings.  It's leaves are spherical with a subtle point at the top making them a unique addition to your houseplant collection.",
        image: 'https://garden.org/pics/2020-11-02/dnrevel/e46950-250.jpg'
    },
    {
        plant_name: 'String of Bananas',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about String of Bananas',
        image: 'https://garden.org/pics/2011-09-14/plantladylin/ec8a2d-250.jpg'
    },
    {
        plant_name: 'String of Turtles',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about String of Turtles',
        image: 'https://garden.org/pics/2021-07-03/Joy/4bb8c5-250.jpg'
    },
    {
        plant_name: 'Prayer Plant',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Prayer Plants',
        image: 'https://garden.org/pics/2019-05-11/skylark/97c966-250.jpg'
    },
    {
        plant_name: 'Rubber Tree',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Rubber Trees',
        image: 'https://garden.org/pics/2016-08-18/JamesAcclaims/591fe7-250.jpg'
    },
    {
        plant_name: 'Air Plants',
        care_level: 'Very Lazy',
        sun_exposure: 'Direct Light',
        watering_schedule: 'Monthly',
        description: 'description about Air Plants',
        image: 'https://garden.org/pics/2015-12-19/plantladylin/735f63-250.jpg'
    },
    {
        plant_name: 'Peace Lily',
        care_level: 'Not Lazy At All',
        sun_exposure: 'Low Light',
        watering_schedule: 'Weekly',
        description: 'description about Peace Lilies',
        image: 'https://garden.org/pics/2020-05-09/plantladylin/70d412-250.jpg'
    },
    {
        plant_name: 'Begonia',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Begonias',
        image: 'https://garden.org/pics/2014-07-13/Paul2032/4008c4-250.jpg'
    },
    {
        plant_name: 'Chinese Evergreen',
        care_level: 'Very Lazy',
        sun_exposure: 'Low Light',
        watering_schedule: 'Weekly',
        description: 'description about Chinese Evergreens',
        image: 'https://garden.org/pics/2012-06-02/valleylynn/874273-250.jpg'
    },
    {
        plant_name: 'English Ivy',
        care_level: 'Somewhat Lazy',
        sun_exposure: 'Low Light',
        watering_schedule: 'Weekly',
        description: 'description about English Ivy',
        image: 'https://garden.org/pics/2015-06-10/bamira/09dc7e-250.jpg'
    },
    {
        plant_name: 'Calathea',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Calatheas',
        image: 'https://garden.org/pics/2019-11-06/Gina1960/2b9e9e-250.jpg'
    },
    {
        plant_name: 'Swiss Cheese Plant',
        care_level: 'Somewhat Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Swiss Cheese Plants',
        image: 'https://garden.org/pics/2014-02-17/Paul2032/21bf22-250.jpg'
    },
    {
        plant_name: 'Money Tree',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Money Trees',
        image: 'https://garden.org/pics/2014-10-01/SugiGirl/54da14-250.jpg'
    },
    {
        plant_name: 'Heartleaf Philodendron',
        care_level: 'Somewhat Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Heartleaf Philodendrons',
        image: 'https://garden.org/pics/2014-03-07/Paul2032/cf9a06-250.jpg'
    },
    {
        plant_name: 'Watermelon Peperomia',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Watermelon Peperomias',
        image: 'https://garden.org/pics/2021-08-31/BlueOddish/1c22bc-250.jpg'
    },
    {
        plant_name: 'Hoya Kerrii',
        care_level: 'Very Lazy',
        sun_exposure: 'Direct Light',
        watering_schedule: 'Weekly',
        description: 'description about Hoya Kerrii',
        image: 'https://garden.org/pics/2016-10-06/Xeramtheum/900f34-250.jpg'
    },
    {
        plant_name: 'Hope Peperomia',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Hope Peperomia',
        image: 'https://garden.org/pics/2022-05-09/Joy/19c056-250.jpg'
    },
    {
        plant_name: 'Hoya Compacta',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Hoya Compacta',
        image: 'https://garden.org/pics/2021-06-11/JayZeke/5a0dce-250.jpg'
    },
    {
        plant_name: 'Silver Philodendron',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Silver Philodendron',
        image: 'https://garden.org/pics/2011-09-17/plantladylin/cf8b2b-250.jpg'
    },
    {
        plant_name: 'Silver Sword Philodendron',
        care_level: 'Not Lazy At All!',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Silver Sword Philodendron',
        image: 'https://garden.org/pics/2022-04-12/sedumzz/15e147-250.jpg'
    },
    {
        plant_name: 'Birds of Paradise',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Birds of Paradise',
        image: 'https://garden.org/pics/2014-04-07/Gleni/9c3072-250.jpg'
    },
    {
        plant_name: 'Aloe Vera',
        care_level: 'Very Lazy',
        sun_exposure: 'Direct Light',
        watering_schedule: 'Bi-Weekly',
        description: 'description about Aloe Vera',
        image: 'https://garden.org/pics/2014-11-15/Paul2032/5d7051-250.jpg'
    },
    {
        plant_name: 'Maidenhair Fern',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Maidenhair Ferns',
        image: 'https://garden.org/pics/2018-01-21/HemNorth/0f912e-250.jpg'
    },
    {
        plant_name: 'Christmas Cactus',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Christmas Cactus',
        image: 'https://garden.org/pics/2012-11-05/Paul2032/87b1f2-250.jpg'
    },
    {
        plant_name: 'Dracaena Corn Plant',
        care_level: 'Somewhat Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Dracaena Corn Plants',
        image: 'https://garden.org/pics/2014-01-28/Paul2032/5a97f4-250.jpg'
    },
    {
        plant_name: 'Majesty Palm',
        care_level: 'Very Lazy',
        sun_exposure: 'Low Light',
        watering_schedule: 'Weekly',
        description: 'description about Majesty Palms',
        image: 'https://garden.org/pics/2013-03-12/Jookieblue/55ed5c-250.jpg'
    },
    {
        plant_name: 'Rattlesnake Plant',
        care_level: 'Very Lazy',
        sun_exposure: 'Low Light',
        watering_schedule: 'Weekly',
        description: 'description about Rattlesnake Plants',
        image: 'https://garden.org/pics/2016-08-26/jmorth/8160a4-250.jpg'
    },
    {
        plant_name: 'Green Velvet Alocasia',
        care_level: 'Not Lazy At All!',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Green Velvet Alocasia',
        image: 'https://plantingman.com/wp-content/uploads/2018/09/Green-Velvet-Alocasia-Indoor-House-Plant.jpg'
    },
    {
        plant_name: 'Elephant Ears',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Elephant Ears',
        image: 'https://garden.org/pics/2016-11-28/eclayne/7e1ce5-250.jpg'
    },
    {
        plant_name: 'Croton',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Crotons',
        image: 'https://garden.org/pics/2014-03-23/jmorth/397a04-250.jpg'
    },
    {
        plant_name: 'Parlor Palm',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Parlor Palms',
        image: 'https://garden.org/pics/2014-07-17/Plantomaniac08/ba4566-250.jpg'
    },
    {
        plant_name: 'Wandering Jew',
        care_level: 'Somewhat Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Wandering Jew',
        image: 'https://plantingman.com/wp-content/uploads/2018/03/Wandering-Jew-House-Plants-768x576.jpg'
    },
    {
        plant_name: 'Bunny Ear Cactus',
        care_level: 'Somewhat Lazy',
        sun_exposure: 'Direct Light',
        watering_schedule: 'Monthly',
        description: 'description about Bunny Ear Cacti',
        image: 'https://garden.org/pics/2021-07-15/Kaktus/7ec8a1-250.jpg'
    },
    {
        plant_name: 'Balloon Cactus',
        care_level: 'Somewhat Lazy',
        sun_exposure: 'Direct Light',
        watering_schedule: 'Monthly',
        description: 'description about Balloon Cacti',
        image: 'https://garden.org/pics/2021-11-20/syzone8aUK/c17d02-250.jpg'
    },
    {
        plant_name: 'Lady Finger Cactus',
        care_level: 'Somewhat Lazy',
        sun_exposure: 'Direct Light',
        watering_schedule: 'Monthly',
        description: 'description about  Lady Finger Cacti',
        image: 'https://garden.org/pics/2019-01-26/Ivan_N_Tx/425a82-250.jpg'
    },
    {
        plant_name: 'Barrel Cactus',
        care_level: 'Not Lazy At All',
        sun_exposure: 'Direct Light',
        watering_schedule: 'Monthly',
        description: 'description about  Barrel Cacti',
        image: 'https://garden.org/pics/2017-02-28/RuuddeBlock/575e34-250.jpg'
    },
    {
        plant_name: 'African Milk Tree',
        care_level: 'Somewhat Lazy',
        sun_exposure: 'Low Light',
        watering_schedule: 'Bi-Weekly',
        description: 'description about African Milk Tree',
        image: 'https://garden.org/pics/2014-02-13/Paul2032/e228fc-250.jpg'
    },
    {
        plant_name: 'Jade Plant',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Bi-Weekly',
        description: 'description about Jade Plants',
        image: 'https://garden.org/pics/2017-12-05/Baja_Costero/ddf1a9-250.jpg'
    },
    {
        plant_name: 'Dragon Tree',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Dragon Trees',
        image: 'https://garden.org/pics/2018-12-05/tofitropic/64eb54-250.jpg'
    },
    {
        plant_name: 'Sweetheart Hoya',
        care_level: 'Somewhat Lazy',
        sun_exposure: 'Direct Light',
        watering_schedule: 'Bi-Weekly',
        description: 'description about Sweetheart Hoyas',
        image: 'https://garden.org/pics/2016-10-06/Xeramtheum/900f34-250.jpg'
    },
    {
        plant_name: 'Anthurium',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: 'description about Anthuriums',
        image: 'https://garden.org/pics/2012-12-31/Paul2032/e94a29-250.jpg'
    },
    {
        plant_name: 'Donkeys Tail',
        care_level: 'Very Lazy',
        sun_exposure: 'Direct Light',
        watering_schedule: 'Bi-Weekly',
        description: 'description about  Donkeys Tail',
        image: 'https://garden.org/pics/2014-04-02/Paul2032/90c698-250.jpg'
    }
];

const seedPlants = () => Plants.bulkCreate(plantData);

module.exports = seedPlants;