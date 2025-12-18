import express from 'express';
import router from './routes/userRoute.js';
import cors from 'cors';
import dotenv from 'dotenv';
import { db } from './db/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/user', router);

// Start the server and connect to the database
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    db();
});