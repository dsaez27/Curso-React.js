const express = require('express');
const app = express();
const cors = require('cors');
const { dbConection } = require('./database/config');

//Configure dotenv to read .env file
require('dotenv').config();

//Body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Configure CORS
app.use(cors());

//DB Config
dbConection();

//Public Directory
app.use(express.static('public'));

//Parse Json
app.use(express.json());

//Route
app.use('/api/auth', require('./routes/auth'));

//Configure Port
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
