"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const app = express_1.default();
exports.default = app;
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, 'Clients')));
app.use(express_1.default.static(path_1.default.join(__dirname, "node_modules")));
app.use('/', index_1.default);
// catch 404 then forward to error handler
app.use(function (req, res, next) {
    next(http_errors_1.default(404));
});

//error handler
app.use(function (err, req, res, next) {
    //set locals,only providing error at development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render error page
    res.status(err.status || 500);
    res.render('error',{title:'Error'});
});
//# sourceMappingURL=app.js.map