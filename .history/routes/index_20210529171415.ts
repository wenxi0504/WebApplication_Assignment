import express from 'express';
const router = express.Router();
export default router;

/* get home page */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home' });
});

/* get home page */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home' });
});

/* get about me page. */
router.get('/aboutme', function(req, res, next) 
{
  res.render('index', { title: 'About Me' });
});

/* get projects page. */
router.get('/projects', function(req, res, next) 
{
  res.render('index', { title: 'Projects' });
});

/* get services page. */
router.get('/services', function(req, res, next) 
{
  res.render('index', { title: 'Services' });
});

/* get contact page. */
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact' });
});
