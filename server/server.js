import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectdb from './config/mongodb.js';

// App Configs
const PORT = process.env.PORT || 4000;
const app = express();
await connectdb()

// Initializing Middlewares
app.use(express.json());
app.use(cors());

// API Routes
app.get('/', (req, res) => {
    res.send('Routing Check');
});

// Start the server
app.listen(PORT, () => {
    console.log('Server is started on port ' + PORT);
});
