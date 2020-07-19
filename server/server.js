const http = require('http');
const express = require('express');
const bodyparser = require('body-parser');
const dbConnection = require('./dbConnection');
const cors = require('cors');
const util = require('util');
const loadModels = require('./dbUtils/loadModels');
const loadRoutes = require('./routes/loadroutes');
const routesUtils = require('./routes/routesUtils');

class Server {
    constructor() {
        this.express = express();
        this.middleware();
        this.connectDB();
        this.routes();
    }

    start() {
        this.port = process.env.PORT || 3000;
        this.express.set('port', this.port);
        this.server = http.createServer(this.express);
        this.server.listen(this.port, () => {
            console.log(`Express server running on localhost:${this.port}`);
        });
        this.express.use('/', (req, res) => { res.send('HelloW') });
    }

    middleware() {
        this.express.use(bodyparser.json());
        this.express.use(bodyparser.urlencoded({ extended: false }));
        this.express.use(
            cors({
                origin: (origin, cb) => cb(null, true),
                credentials: true,
                preflightContinue: true,
                exposedHeaders: [
                    "Access-Control-Allow-Headers",
                    "Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept",
                    "X-Password-Expired"
                ],
                optionsSuccessStatus: 200
            })
        );
    }
    routes() {
        this.express.use('/api/token', loadRoutes.AuthentificationRouter);
        this.express.use(routesUtils.checkAuthorization);
        this.express.use('/api/users-common', loadRoutes.UserCommonRouter);
    }
    connectDB() {
        let trials = 0;
        console.log(dbConnection.authenticate())
        const connectWithRetry = () => {
            dbConnection.authenticate()
                .then(() => {
                    console.log("connected");
                    this.doesTableExists();
                }).catch(err => {
                    console.log(`Error log : ${err}`);
                    if (trials < 3) {
                        console.log('Failed to connect, retrying');
                        setTimeout(connectWithRetry, 2000);
                    } else {
                        console.log('Failed to connect after 3 trials');
                        process.exit(-1);
                    }
                });
        };
        connectWithRetry();
    }

    async doesTableExists() {
        try {
            await dbConnection.query('select * from User')
                .then(res => {
                    try {
                        loadModels;
                    } catch (error) {
                        dbConnection.sync({ force: true });
                    }
                });
        } catch (err) {
            console.log(`Error while checking if tables exist : ${err}`);
        }
    }
}

module.exports = { Server }