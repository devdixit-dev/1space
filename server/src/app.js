// Express App

import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import helmet from 'helmet';
import morgan from 'morgan';

import ConnectToDB from './config/database.config.js';
ConnectToDB();

const app = express();
const port = process.env.PORT || 4040

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));


app.get('/', (req, res) => {
  res.end('Home or / route');
});

app.listen(port, () => {
  console.log(`Express app running on http://localhost:${port} 🚀`);
});

export default app;