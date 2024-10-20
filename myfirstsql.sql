CREATE DATABASE pharmacy_store;
USE pharmacy_store;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
SHOW TABLES;
INSERT INTO users (name, email, password)
VALUES ('John Doe', 'john@example.com', 'password123');
SHOW TABLES;
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    stock INT DEFAULT 0
);
