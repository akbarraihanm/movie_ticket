const express = require('express');
const cors = require('cors');
require('dotenv').config({path: __dirname + '/.env'});

const app = express();

const db = require("./lib/models/init");
db.sequelize.sync({alter : true});

var corsOptions = {
    origin: "*"
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.json({
        message : "Welcome to Movie Ticket app"
    });
});

require('./lib/routes/genre.route')(app);
require('./lib/routes/status.route')(app);
require('./lib/routes/price.route')(app);
require('./lib/routes/movie.route')(app);
require('./lib/routes/transaction.route')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});