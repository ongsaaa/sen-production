import mongoose from "mongoose";
import 'dotenv/config'; // Import dotenv to load .env file

async function connect() {
    try {
        // process.env.ATLAS_URI will be used in production (Vercel) and locally via the .env file
        const MONGO_URI = process.env.ATLAS_URI;

        if (!MONGO_URI) {
            throw new Error("ATLAS_URI is not defined in your environment variables.");
        }

        mongoose.set('strictQuery', true);
        const db = await mongoose.connect(MONGO_URI);
        console.log("Database Connected Successfully");

        return db.connection;
    } catch (error) {
        console.error("Could not connect to the database:", error);
        throw error;
    }
}

export default connect;