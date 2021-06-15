#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const debug_1 = __importDefault(require("debug"));
debug_1.default('comp229-m2021-assignment1-wenxu-301098127:server');
const http_1 = __importDefault(require("http"));

/* Get port from environment and store in Express.*/
let port = normalizePort(process.env.PORT || '3000');
app_1.default.set('port', port);
let server = http_1.default.createServer(app_1.default);
/*Listen on provided port, on all network interfaces.*/
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/* Normalize a port into a number, string, or false.*/
function normalizePort(val) {
    let port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
/* Event listener for HTTP server "error" event.*/
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
         // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/* Event listener for HTTP server "listening" event.*/

function onListening() {
    let addr = server.address();
    let bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug_1.default('Listening on ' + bind);
}
//# sourceMappingURL=index.js.map