const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./model/Product");

dotenv.config();

const products = [
    {
        name: "Laptop",
        price: "55000",
        image: "http://localhost:5000/images/laptop.png",
        description: "High performance laptop"
    },
    {
        name: "Mobile",
        price: "25000",
        image: "http://localhost:5000/images/mobile.png",
        description: "Latest smartphone"
    },
    {
        name: "Headphones",
        price: "3000",
        image: "http://localhost:5000/images/headphones.png",
        description: "Noise cancelling headphones"
    },
    {
        name: "Smartwatch",
        price: "15000",
        image: "http://localhost:5000/images/smartwatch.png",
        description: "Feature-rich smartwatch"
    },
    {
        name: "Tablet",
        price: "40000",
        image: "http://localhost:5000/images/tablet.png",
        description: "Professional tablet for creators"
    },
    {
        name: "Pro Laptop",
        price: "85000",
        image: "http://localhost:5000/images/laptop.png",
        description: "Ultimate workstation for professionals"
    },
    {
        name: "Gaming Phone",
        price: "45000",
        image: "http://localhost:5000/images/mobile.png",
        description: "High refresh rate display for gaming"
    },
    {
        name: "Fitness Watch",
        price: "5000",
        image: "http://localhost:5000/images/smartwatch.png",
        description: "Track your health and workouts"
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOURL);
        console.log("Database Connected");

        // Optional: Clear existing products to avoid duplicates if run multiple times
        await Product.deleteMany({});
        console.log("Cleared existing products");

        await Product.insertMany(products);
        console.log("Data Imported!");

        mongoose.connection.close();
    } catch (error) {
        console.error("Error importing data:", error);
        process.exit(1);
    }
};

seedDB();
