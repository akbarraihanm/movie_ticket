const express = require('express');
const cors = require('cors');
require('dotenv').config({path: __dirname + '/.env'});

const app = express();

const db = require("./lib/models/init");
const bodyParser = require('body-parser');
db.sequelize.sync({alter : true});

var corsOptions = {
    origin: "*"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req, res) => {
    res.json({
        message : "Welcome to Movie Ticket app"
    });
});

require('./lib/routes/price.route')(app);
require('./lib/routes/transaction.route')(app);
require('./lib/routes/time.route')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});