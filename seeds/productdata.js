const { Product } = require('../models');

const productdata = [
    {
        name: 'One Piece',
        item: 'Sword',
        price: '$15.99',
        description: 'A sword that the character uses in the anime!'            
    },
    {
        name: 'Demon Slayer',
        item: 'Axe',
        price: '$25.99',
        description: 'A axe that the character uses in the anime!'            
    },
    {
        name: 'Demon Slayer',
        item: 'Axe',
        price: '$25.99',
        description: 'A axe that the character uses in the anime!'            
    },
    {
        name: 'One Piece',
        item: 'Staff',
        price: '$20.99',
        description: 'A staff that the character uses in the anime!'            
    }

];


const seedProduct = () => Product.bulkCreate(productdata);

module.exports = seedProduct;