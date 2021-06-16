"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const index_1 = require("../Controllers/index");
router.get('/', index_1.DisplayHomePage);
router.get('/home', index_1.DisplayHomePage);
router.get('/about', index_1.DisplayAboutPage);
router.get('/projects', index_1.DisplayProjectsPage);
router.get('/services', index_1.DisplayServicesPage);
router.get('/contact', index_1.DisplayContactPage);
router.get('/', function (req, res, next) {
    res.render('home', { title: 'Home', page: 'home' });
});
router.get('/home', function (req, res, next) {
    res.render('home', { title: 'Home', page: 'home' });
});
router.get('/aboutme', function (req, res, next) {
    res.render('aboutme', { title: 'About Me', page: 'about me' });
});
router.get('/projects', function (req, res, next) {
    res.render('projects', { title: 'Projects', page: 'projects' });
});
router.get('/services', function (req, res, next) {
    res.render('services', { title: 'Services', page: 'services' });
});
router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Contact', page: 'contact' });
});
//# sourceMappingURL=index.js.map