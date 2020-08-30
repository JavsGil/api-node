const mysql = require("mysql");
const PoolManager = require('mysql-connection-pool-manager');

class DBService {
    constructor() {
        this._db = '';
        this.parameters = {
            idleCheckInterval: 1000,
            maxConnextionTimeout: 30000,
            idlePoolTimeout: 3000,
            errorLimit: 20,
            preInitDelay: 50,
            sessionTimeout: 60000,
            onConnectionAcquire: () => { /* console.log("Acquire"); */ },
            onConnectionConnect: () => { /*console.log("Connect"); */ },
            onConnectionEnqueue: () => { /*console.log("Enqueue");*/ },
            onConnectionRelease: () => { /*console.log("Release");*/ },
            mySQLSettings: {
                host: process.env.hostDB,
                user: process.env.userDB ,
                password: process.env.passwordDB,
                database: process.env.nameDB,
                dateStrings: true,
                port: '3306',
                //socketPath: '/var/run/mysqld/mysqld.sock',
                charset: 'utf8',
                multipleStatements: true,
                connectTimeout: 15000,
                acquireTimeout: 10000,
                waitForConnections: true,
                connectionLimit: 20,
                queueLimit: 5000,
                debug: false
            }
        };

        this._db = PoolManager(this.parameters);
    }
}

module.exports = { DBService };