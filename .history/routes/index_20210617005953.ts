import express from 'express';
const router = express.Router();
export default router;

//instantiate an object of type index controller
import {DisplayHomePage, DisplayAboutPage, DisplayProjectsPage, DisplayServicesPage , DisplayContactPage, DisplayLoginPage, ProcessLoginPage, DisplayRegisterPage, ProcessRegisterPage, ProcessLogoutPage } from '../Server/Controllers/index' ;

/* GET home page. automatically import display home function */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage)

/* GET about page. */
router.get('/aboutme', DisplayAboutPage);

/* GET projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);

/* GET - display login page - with /login . */
router.get('/login', DisplayLoginPage);

/* POST - process login page when user clicks Login Button */
router.post('/login', ProcessLoginPage);

/* GET - display register page - with /register . */
router.get('/register', DisplayRegisterPage);

/* POST - process register page when user clicks Register Button */
router.post('/register', ProcessRegisterPage);

/* GET - process the logout page - with /logout . */
router.get('/logout', ProcessLogoutPage);

//module.exports = router;


