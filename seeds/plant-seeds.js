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
        description: "String of bananas, also known as 'curio radicans' is apart of the succulent family. Like its name, its leaves are banana shaped that grow on long hanging tendrils. They share many similarities to the string of pearls with on of their only differences being their leaves. Perfect for any space with bright indirect light or more, these trailing beauties require very little water and attention. Watering only when the soil is completely dried out will ensure your string of bananas is happy and healthy!",
        image: 'https://garden.org/pics/2011-09-14/plantladylin/ec8a2d-250.jpg'
    },
    {
        plant_name: 'String of Turtles',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "String of turtles, or 'peperomia prostrata' is a trailing plant with a leaf pattern that resembles a turtle shell. Similar to the string of hearts, this beautiful trailing plant can be found in different varieties. It prefers to dry out inbetween waterings and will thrive in bright indirect light. ",
        image: 'https://garden.org/pics/2021-07-03/Joy/4bb8c5-250.jpg'
    },
    {
        plant_name: 'Prayer Plant',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "'Maranta leuconeura', or more commonly known as the prayer plant comes in many different varieties. The prayer plant name comes from its leaves moving up and down throughout the day giving it the effect that it's praying. It's a very popular choice for new houseplant parents but in order to see new growth it needs lots of bring indirect light and does not like sitting in water.",
        image: 'https://garden.org/pics/2019-05-11/skylark/97c966-250.jpg'
    },
    {
        plant_name: 'Rubber Plant',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The rubber plant is apart of the ficus family with a technical name of 'ficus elastica'. It has thick glossy leaves that come in a variety of colors from deep green to varigated varieties with pinks, whites, light greens and red colors. This is a very low maintenence house plant that requires only bright indirect light and little watering. When the soil feels dry, a drink is all it needs. Like most other indoor house plants, make sure you don't let it's roots sit in water and give time inbetween waterings.",
        image: 'https://garden.org/pics/2016-08-18/JamesAcclaims/591fe7-250.jpg'
    },
    {
        plant_name: 'Air Plants',
        care_level: 'Very Lazy',
        sun_exposure: 'Direct Light',
        watering_schedule: 'Monthly',
        description: "Air plants or 'tillandsia' are epiphytes, which is a fancy word meaning they grow on other plants like tree branches. There are hundreds of different varieties of these beautiful plants but they all typically grow in a rosette pattern with new growth coming from the center. They love bright light and don't need to be planted in soil to thrive. They actually love to sit on their own or in a cute hanging planter. They only need to be watered monthly during the growing season and even less in the winter season. Watering them is as simple as submerging them in water for a couple minutes, shaking the excess water off and placing them back in their home!",
        image: 'https://garden.org/pics/2015-12-19/plantladylin/735f63-250.jpg'
    },
    {
        plant_name: 'Peace Lily',
        care_level: 'Not Lazy At All',
        sun_exposure: 'Low Light',
        watering_schedule: 'Weekly',
        description: "Peace lilies are a beautiful indoor plant with snowy white flowers. They're actually not a lily at all but apart of the araceae family. They prefer bright indirect light but can still flower in low light conditions making a versitile plant for any space. When it comes to watering, don't let their soil dry out but also do not let their roots sit in soil.",
        image: 'https://garden.org/pics/2020-05-09/plantladylin/70d412-250.jpg'
    },
    {
        plant_name: 'Begonia',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The rhizomatous begonias are more of a foliage type of begonia than a flowering one. It's beautifully colored leaves are different shades of green in a sprial formation on top and are a deep red underneath. Watering is fairly simple with letting it dry out between waterings. You'll know it needs a drink when the leaves begin to droop.",
        image: 'https://garden.org/pics/2014-07-13/Paul2032/4008c4-250.jpg'
    },
    {
        plant_name: 'Chinese Evergreen',
        care_level: 'Very Lazy',
        sun_exposure: 'Low Light',
        watering_schedule: 'Weekly',
        description: "The chinese evergreen, or more technically named 'aglaonema commutatum' are fleshy slow growing plants with leathery leaves. It comes in several different color varieties but is most known for its silvery colourful pattern. They are a very tolerant plant and can handle low light conditions with ease. While it doesn't like to sit in water, it does prefer a damp environment so ensuring the soil stays moist will make sure your chinese evergreen is growing strong and healthy.",
        image: 'https://garden.org/pics/2012-06-02/valleylynn/874273-250.jpg'
    },
    {
        plant_name: 'English Ivy',
        care_level: 'Somewhat Lazy',
        sun_exposure: 'Low Light',
        watering_schedule: 'Weekly',
        description: "English Ivy is also known as 'hedera helix' is most popular for its clinging vine that can grow on nearly anything. Outside, it can stay low to the ground and cover the ground or climb trees and homes. It's a very hearty plant and indoors can grow in nearly any condition. It does great in hanging baskets or in a pot with a moss pole to grow up. When it comes to watering, let the soil partially dry out between waterings.",
        image: 'https://garden.org/pics/2015-06-10/bamira/09dc7e-250.jpg'
    },
    {
        plant_name: 'Calathea',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "Calatheas are known for their several different varieties has beautifully green and colorful leaves. While it would prefer bright indirect light, it can also live in low light conditions. Make sure to let the soil dry out inbetween waterings but when you it is time for a drink, be sure to completely saturate the soil.",
        image: 'https://garden.org/pics/2019-11-06/Gina1960/2b9e9e-250.jpg'
    },
    {
        plant_name: 'Swiss Cheese Plant',
        care_level: 'Somewhat Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The swiss cheese plant is also apart of the monstera family with a technical name of 'monstera epipremnoides'. It's known for it's leaves with large holes in them resembling swiss cheese. Like monsteras, it is a climbing plant and uses aerial roots to attach itself onto moss poles. As it climbes the leaves become larger and more perforated with holes. It's important that this plant gets bright indirect light and does not sit in water. Make sure to let the soil nearly dry out before watering again.",
        image: 'https://garden.org/pics/2014-02-17/Paul2032/21bf22-250.jpg'
    },
    {
        plant_name: 'Money Tree',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The money tree or 'pachira aquatica' is an evergreen with a hand shaped leaf pattern. as an indoor plant, their trunks are typically braided as they grow. They symbolize success and good fortune and are also great at cleaning the air. While they can withstand low light conditions, they do their best in bright indirect light.",
        image: 'https://garden.org/pics/2014-10-01/SugiGirl/54da14-250.jpg'
    },
    {
        plant_name: 'Heartleaf Philodendron',
        care_level: 'Somewhat Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The heartleaf philodendron has a trailing stem that can either hang down from a hanging basket or grow upwards with the support of a moss pole. They have dark green leaves with a slight heart shape. These house plants are one of the toughest plants you can own as they can withstand lots of different temperature and light conditions. If you'd like to see it thrive, bright indirect light and letting the soil dry out inbetween waterings is your best bet!",
        image: 'https://garden.org/pics/2014-03-07/Paul2032/cf9a06-250.jpg'
    },
    {
        plant_name: 'Watermelon Peperomia',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The watermelon peperomia or 'peperomia argyreia' is a troipcal evergreen shrub that grows no more than a foot tall in the best of conditions. It gets its name from it's leaves resembling a watermelon rind. It comes in several different varieties but they all share the same watermelon rind pattern. This plant needs bright indirect light to stay healthy and strong and likes its soil to dry out inbetween watering.",
        image: 'https://garden.org/pics/2021-08-31/BlueOddish/1c22bc-250.jpg'
    },
    {
        plant_name: 'Sweetheart Hoya',
        care_level: 'Very Lazy',
        sun_exposure: 'Direct Light',
        watering_schedule: 'Weekly',
        description: "A sweeheart hoya or the 'hoya kerrii' is a climbing plant with hearty green heart shaped leaves. They can grow up to 13 feet high and as an adult plant produces beautiful clusters of flowers. They like bright light and to dry out inbetween waterings.",
        image: 'https://garden.org/pics/2016-10-06/Xeramtheum/900f34-250.jpg'
    },
    {
        plant_name: 'Hope Peperomia',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The hope peperomia, also known as 'peperomia tetraphylla' have oval succulent like green leaves. It has a trailing stem and is deal in a hanging basket. It has hearty leaves and prefers bright indirect light to keep producing new growth through the growing season. When it comes to watering, because of how hearty it's leaves are, you can let it's soil dry out completely inbetween waterings.",
        image: 'https://garden.org/pics/2022-05-09/Joy/19c056-250.jpg'
    },
    {
        plant_name: 'Hindu Rope Plant',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The hindu rope plant, also known as a 'hoya carnosa compacta' has dark green curly leaves that give it a rope like appearance. It is a trailing vine that is great in a hanging basket in a pot that allows it to hang off a shelf, ledge or desk.It requires bright or bright indirect light to grow healthy and strong but doesn't require freqent watering in order to thrive. Once the soil is dried out completely, saturate the soil in water and watch it grow!",
        image: 'https://garden.org/pics/2021-06-11/JayZeke/5a0dce-250.jpg'
    },
    {
        plant_name: 'Silver Philodendron',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The silver philodendron, or 'scindapsus pictus' is commonly mistaken for the satin pothos. While they look very similar they are apart of different species. They are a trailing plant and have dark green leaves with sliver spots on them. Like most philodendrons, they like bright indirect light and to be nearly dried out inbetween waterings.",
        image: 'https://garden.org/pics/2011-09-17/plantladylin/cf8b2b-250.jpg'
    },
    {
        plant_name: 'Silver Sword Philodendron',
        care_level: 'Not Lazy At All!',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The silver sword, or 'philodendron Hastatum' has shiny silvery arrow shaped leaves that give off a grey-green color. They're a climbing plant that require lots of light and attention. They don't like to sit in water (like most houseplants) but also don't want to dry out either. If live in a cooler climate, in the off season a grow light may be necesary to ensure your silver sword continues to stay strong and healthy.",
        image: 'https://garden.org/pics/2022-04-12/sedumzz/15e147-250.jpg'
    },
    {
        plant_name: 'Birds of Paradise',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The birds of paradise or 'strelitzia reginae' are tropical plant with thick waxy fan like leaves. While most people are aware of the unique and stunning birds of paradise flower, the foliage of a birds of paradise is also beautiful. Depending on the variety, they can have a deep green color or a blue-green color to them. They prefer bright indirect light to bright light and would like to be nearly dried out inbetween waterings.",
        image: 'https://garden.org/pics/2014-04-07/Gleni/9c3072-250.jpg'
    },
    {
        plant_name: 'Aloe Vera',
        care_level: 'Very Lazy',
        sun_exposure: 'Direct Light',
        watering_schedule: 'Bi-Weekly',
        description: "Aloe vera is an herb with succulent leaves arranged in a rosette formation, meaining new growth starts from the inside of the plant. they have thick sharp leaves with sharp spines on the edge. Aloe veras a great at filtering out the air in your home in addition to several other health benefits. Because of its succulent leaves it needs little water and bright indirect light in order to grow thick and strong. You can bring it outside in the summer months but make sure to not let it sit in bright direct sunlight for too long as it'll scorch the leaves.",
        image: 'https://garden.org/pics/2014-11-15/Paul2032/5d7051-250.jpg'
    },
    {
        plant_name: 'Maidenhair Fern',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The 'adiantum pedatum', or more commonly known as the maidenhair fern is apart of the hundreds of different varieties of ferns. It gets its name from the long thin black stem that supports its small delicate light green leaves. They're more on the heardy side, meaning they don't need a lot of humidity. Be sure to give them bright indirect light to promote new growth through the growing season!",
        image: 'https://garden.org/pics/2018-01-21/HemNorth/0f912e-250.jpg'
    },
    {
        plant_name: 'Christmas Cactus',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The 'schlumbergera truncata' or christmas cactus gets its unique name from the beautiful pink or white flowers it blooms during the winter months, typically around christmas time. The plant recognizes it's receiving less light and produces big beautiful flowers that last around a week before they fall off. When they're not blooming they look like a succulent with their flat thick waxy leaves. When it comes to sunlight, bright indirect light is your best bet while also not letting the soil completely dry out inbetween waterings.",
        image: 'https://garden.org/pics/2012-11-05/Paul2032/87b1f2-250.jpg'
    },
    {
        plant_name: 'Corn Plant',
        care_level: 'Somewhat Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Bi-Weekly',
        description: "The corn plant, or 'dracaena Fragrans' is a slow growing plant that's thick stem produces long thin leaves, giving it the appearance of a corn stalk. To continue their slow growth, they prefer bright indirect light but can tolerate low light. Depending on the type of light given, they should be watered once every 1-2 weeks depending on how wet the soil is.",
        image: 'https://garden.org/pics/2014-01-28/Paul2032/5a97f4-250.jpg'
    },
    {
        plant_name: 'Majesty Palm',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The majesty palm, as you can guess is apart of the many different varieties of palms. It has long think feathery fronds that come off each stem. It preferes bright indirect light and during the summer months likes fertelizer to stimulate faster growth. Make sure it has well draining soil and has time to dry out halfway inbetween waterings. Their leaves are very delicate and can easily brown if left unwatered.",
        image: 'https://garden.org/pics/2013-03-12/Jookieblue/55ed5c-250.jpg'
    },
    {
        plant_name: 'Rattlesnake Plant',
        care_level: 'Very Lazy',
        sun_exposure: 'Low Light',
        watering_schedule: 'Weekly',
        description: "The rattlesnake plant is one of the many 'calathea' varieties. It has long spotted and striped leaves resembling the skin of a rattlesnake with a dark purple color to the underside of the leaf. Like most calatheas, it prefers bright indirect light and to nearly dry out inbetween waterings.",
        image: 'https://garden.org/pics/2016-08-26/jmorth/8160a4-250.jpg'
    },
    {
        plant_name: 'Green Velvet Alocasia',
        care_level: 'Not Lazy At All!',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The 'alocasia Frydek' is an arrowhead shaped leaf with dark green color and white veins throughout. It has a velvety surface, which is where it's name comes from. Like most alocacias, they prefer bright indirect light to simulate new grow and cannot dry out inbetween waterings, as their leaves will droop significantly if left unwatered. They also prefer more humidity than most indoor plants, making them more difficult to care for and are typically found being care fore by more experienced house plant parents.",
        image: 'https://plantingman.com/wp-content/uploads/2018/09/Green-Velvet-Alocasia-Indoor-House-Plant.jpg'
    },
    {
        plant_name: 'Elephant Ears',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The elephant ear is a beautiful perennial with large green leaves in the shape of a heart. It is great as an indoor plant but can be taken outside to get full advantage of all that wonderful sunlight. If you brought the elephant ear outside, you'd likely notice it would start to produce more leaves quicker as it likes the heat and bright indirect light. Be sure to water weekly so the soil doesn't dry out.",
        image: 'https://garden.org/pics/2016-11-28/eclayne/7e1ce5-250.jpg'
    },
    {
        plant_name: 'Croton',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The 'codiaeum variegatum', or more commonly known as the croton is a bush like plant with long multi-colored leaves. They can be planted outdoors in tropical climates but are often found as indoor house plants in the northern hemisphere. The are heardy plants that can withstand low light conditions but prefer bright indirect light to stimulate new growth.",
        image: 'https://garden.org/pics/2014-03-23/jmorth/397a04-250.jpg'
    },
    {
        plant_name: 'Parlor Palm',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The parlor palm, as you guessed is another palm variation. It has arching green leaves that come from one leaflet. Indoors, they typically grow around 4ft tall and make a great addition to any space. In the summer months you can bring this beautiful plant outside to add some life to your outdoor living space. Like most palms, their leaves are delicate so be sure to not place them in direct sunlight as their leaves will burn. When it comes to watering, they don't like to sit in water but also do not like to dry out completely inbetween waterings. A quick lift of the pot will indicate how much water is left and if you should water or leave it for a couple days.",
        image: 'https://garden.org/pics/2014-07-17/Plantomaniac08/ba4566-250.jpg'
    },
    {
        plant_name: 'Inch Plant',
        care_level: 'Somewhat Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The 'tradescantia zebrina', or inch plant is a beautiful trailing plant with striped pink to purple leaves. It comes is several different varieties and makes a great addition to any more. All they need is bright indirect light and to let them dry out inbetween waterings.",
        image: 'https://plantingman.com/wp-content/uploads/2018/03/Wandering-Jew-House-Plants-768x576.jpg'
    },
    {
        plant_name: 'Bunny Ear Cactus',
        care_level: 'Somewhat Lazy',
        sun_exposure: 'Direct Light',
        watering_schedule: 'Monthly',
        description: "The bunny ear cactus, or also known as 'angel wing cactus' has thick pads for leaves that grow in pairs with fuzzy bristles on the outside, resembling ears of a rabbit. Like most cactus they need as much bright light as possible, as their native habitat is the desert. They store a lot of their water in their leaves and they're used to going without water for long periods of time. Be sure to let the soil completely dry out before watering as they are very prone to root rot. They need a well draining pot so they don't sit in water for too long.",
        image: 'https://garden.org/pics/2021-07-15/Kaktus/7ec8a1-250.jpg'
    },
    {
        plant_name: 'Balloon Cactus',
        care_level: 'Somewhat Lazy',
        sun_exposure: 'Direct Light',
        watering_schedule: 'Monthly',
        description: "The balloon cactus, or more technically named 'parodia magnifica', is a round balloon shaped cactus with with golden bristly spines growing on its ribs. In the right conditions, it can produce a beautiful flower at the top center of the plant. Like most cactus they need as much bright light as possible, as their native habitat is the desert. They store a lot of their water in their leaves and they're used to going without water for long periods of time. Be sure to let the soil completely dry out before watering as they are very prone to root rot. They need a well draining pot so they don't sit in water for too long.",
        image: 'https://garden.org/pics/2021-11-20/syzone8aUK/c17d02-250.jpg'
    },
    {
        plant_name: 'Lady Finger Cactus',
        care_level: 'Somewhat Lazy',
        sun_exposure: 'Direct Light',
        watering_schedule: 'Monthly',
        description: "The 'mammillaria elongata', or more easily pronounced lady finger cactus, is known for its long narrow stems that resemble fingers. They grow in clustered groups with spiky bristles covering their surface. Like most cactus they need as much bright light as possible, as their native habitat is the desert. They store a lot of their water in their leaves and they're used to going without water for long periods of time. Be sure to let the soil completely dry out before watering as they are very prone to root rot. They need a well draining pot so they don't sit in water for too long.",
        image: 'https://garden.org/pics/2019-01-26/Ivan_N_Tx/425a82-250.jpg'
    },
    {
        plant_name: 'Barrel Cactus',
        care_level: 'Not Lazy At All',
        sun_exposure: 'Direct Light',
        watering_schedule: 'Monthly',
        description: "Barrel cacti grow in short tubular shapes and have ribs with spikes throughout it's surface. Because it's very fleshy on the inside, it doesn't require much water to grow. In the right conditions, it can bloom yellow or orange flowers at the beginning of spring. A fun fact about this cacti is that it can live to be over 100 years old!",
        image: 'https://garden.org/pics/2017-02-28/RuuddeBlock/575e34-250.jpg'
    },
    {
        plant_name: 'African Milk Tree',
        care_level: 'Somewhat Lazy',
        sun_exposure: 'Low Light',
        watering_schedule: 'Bi-Weekly',
        description: "The african milk tree, of 'euphorbia trigona' grows upwards with small oval leaves and thorns. In most cases, the leaves are green but there is a less common variety that has bright red leaves. Because it's apart of the succulent family, it needs to have good drainage to get rid of any excess water. Also because it's apart of the succulent family, it doesn't need much water to survive and prefers the soil to dry out completely inbetween waterings.",
        image: 'https://garden.org/pics/2014-02-13/Paul2032/e228fc-250.jpg'
    },
    {
        plant_name: 'Jade Plant',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Bi-Weekly',
        description: "Jade plants, or 'crassula ovata' are one of the easier succulent types to grow. they have thick fleshy leaves that grow off of a brown trunk. As long as they have well draining soil and bright indirect light, they will continue to grow through the spring/summer season. Like other succulents, drying out completely inbetween waterings will ensure you're not giving your plant too much water.",
        image: 'https://garden.org/pics/2017-12-05/Baja_Costero/ddf1a9-250.jpg'
    },
    {
        plant_name: 'Dragon Tree',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The 'dracaena marginata', or more commonly known as the dragon tree is a beautiful  plants with thin green leaves with red edges. Like the snake plant, it is very drought tolerant and is nearly indestructible. While it can handle long periods of time inbetween waterings, it's recommended to water once you notice the soil has dried out completely. This plant also prefers bright indirect light. Bright light would cause the leaves to burn.",
        image: 'https://garden.org/pics/2018-12-05/tofitropic/64eb54-250.jpg'
    },
    {
        plant_name: 'Anthurium',
        care_level: 'Very Lazy',
        sun_exposure: 'Bright Indirect Light',
        watering_schedule: 'Weekly',
        description: "The anthurium, also called the flamingo plant, has beautiful flowers that are typically red or white. Its flowers share the same waxy feeling as it's leaves, giving it a unique appearance from normal flowering plants. It prefers bright indirect light and well draining soil to grow healthy and strong. Watering when the soil is nearly dried out will ensure you're not over watering your beautiful flowering plant.",
        image: 'https://garden.org/pics/2012-12-31/Paul2032/e94a29-250.jpg'
    },
    {
        plant_name: 'Donkeys Tail',
        care_level: 'Very Lazy',
        sun_exposure: 'Direct Light',
        watering_schedule: 'Monthly',
        description: "The 'sedum morganianum', or donkey's tail is a popular trailing succulent with blue green leaves. It is also apart of the succulent family meaning it requires only bright light and very little water to grow. Like most succulents, you can give this plant too much water so be sure to let the soil dry out completely inbetween waterings in addition to a well draining pot to get rid of excess water.",
        image: 'https://garden.org/pics/2014-04-02/Paul2032/90c698-250.jpg'
    }
];

const seedPlants = () => Plants.bulkCreate(plantData);

module.exports = seedPlants;