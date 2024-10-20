const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key'; // This should be the same secret key you used in auth.js

// Middleware function to authenticate token
const authenticateToken = (req, res, next) => {
    // Get the token from the "Authorization" header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Token format: "Bearer <token>"

    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided.' });
    }

    // Verify the token
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token.' });
        }
        // Attach the user info (from the token) to the request object
        req.user = user;
        next(); // Pass control to the next handler (your route handler)
    });
};

module.exports = authenticateToken;
