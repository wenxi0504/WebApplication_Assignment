/* File name:COM229-M2021-Assignment1-portfolio site
Student’s Name: Wen Xu
 StudentID: 301098127
  Date:2021-06-02  
   */

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
    res.render('index', { title: 'AboutMe' });
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