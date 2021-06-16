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


