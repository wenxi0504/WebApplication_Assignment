import express from 'express';
const router = express.Router();
export default router;

router.get('/', function (req, res, next) {
    res.render('home', { title: 'Home' });
});
router.get('/home', function (req, res, next) {
    res.render('home', { title: 'Home' });
});
router.get('/aboutme', function (req, res, next) {
    res.render('aboutme', { title: 'About Me' });
});
router.get('/projects', function (req, res, next) {
    res.render('projects', { title: 'Projects' });
});
router.get('/services', function (req, res, next) {
    res.render('services', { title: 'Services' });
});
router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Contact' });
});
//# sourceMappingURL=index.js.map