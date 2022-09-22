import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import db from "./config/database.js";
import pictureRoutes from "./routes/index.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/pictures', pictureRoutes);

app.listen(process.env.PORT || 5000, () => console.log(`Server running at on port ${process.env.PORT}`));