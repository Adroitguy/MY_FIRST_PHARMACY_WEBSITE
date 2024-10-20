const express = require('express');
const router = express.Router();
const authenticateToken = require('./authMiddleware');


// Define a route for /products
router.get('/', authenticateToken, (req, res) => {
    const products = [
        { id: 1, name: 'Aspirin', price: 5.99 },
        { id: 2, name: 'Cough Syrup', price: 7.99 },
        { id: 3, name: 'Vitamins', price: 12.99 },
    ];
    res.json(products);
});

module.exports = router;
