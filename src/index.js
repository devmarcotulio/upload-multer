const express = require('express');
const router = require('./routes');
const connectDataBase = require('./config/database/db');

const app = express();

app.use(express.json());

app.use(router);

connectDataBase();

app.listen(3000, () => console.log('Server running on port 3000'));