import express from 'express';
const router = express.Router();
export default router;

//instantiate an object of type index controller
import {DisplayHomePage, DisplayAboutPage, DisplayProjectsPage, DisplayServicesPage , DisplayContactPage} from '../Server/Controllers/index' ;

/* GET home page. automatically import display home function */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);

//module.exports = router;


/* get home page */
router.get('/', function(req, res, next) 
{
  res.render('home', { title: 'Home', page:'home' });
}); 

/* get home page */
router.get('/home', function(req, res, next) 
{
  res.render('home', { title: 'Home', page:'home' });
});

/* get about me page. */
router.get('/aboutme', function(req, res, next) 
{
  res.render('aboutme', { title: 'About Me' , page:'about me'});
});

/* get projects page. */
router.get('/projects', function(req, res, next) 
{
  res.render('projects', { title: 'Projects', page:'projects' });
});

/* get services page. */
router.get('/services', function(req, res, next) 
{
  res.render('services', { title: 'Services' , page:'services'});
});

/* get contact page. */
router.get('/contact', function(req, res, next) 
{
  res.render('contact', { title: 'Contact' , page:'contact'});
})