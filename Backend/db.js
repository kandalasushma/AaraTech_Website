<<<<<<< HEAD
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
=======
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://kandalasushma17_db_user:123@cluster0.hpoorzg.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log("MongoDB Connected");
    } catch (err) {
        console.log(err);
    }
}

connectDB();
>>>>>>> 5c22e46 (Intial commit)
