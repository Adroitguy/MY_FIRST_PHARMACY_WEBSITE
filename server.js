const express = require('express');
const app = express();

// Import the products route
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');

app.use(express.json());

// Define the home route
app.get('/', (req, res) => {
    res.send('Welcome to the Pharmacy Store!');
});

// Use the products route for all /products requests
app.use('/products', productRoutes);
app.use('/auth', authRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use((req, res) => {
    res.status(404).send('Sorry, that route does not exist.');
});

