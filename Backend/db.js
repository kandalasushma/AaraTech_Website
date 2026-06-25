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