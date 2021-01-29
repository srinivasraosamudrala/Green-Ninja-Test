const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const cors = require('cors');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/registration', (req, res) => {
    res.status(200).send({
        users: req.body.username,
        count:req.body.count+1
    })
});

const server = app.listen(3001, () => {
    console.log('Server listening on port 3001');
});
