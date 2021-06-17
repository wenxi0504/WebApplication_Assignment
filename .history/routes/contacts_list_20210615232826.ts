import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type clothing controller
//import { DisplayAddPage, DisplayContacts_ListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Server/Controllers/contacts_list';
import {  DisplayContacts_ListPage, DisplayEditPage,  ProcessDeletePage, ProcessEditPage } from '../Server/Controllers/contacts_list';

/* GET /contacts_list page. */
router.get('/', DisplayContacts_ListPage);

/* GET - display /contacts_list/add page. */
//router.get('/add', DisplayAddPage);

/* GET - display /contacts_list/edit/:id page. */
router.get('update', DisplayEditPage);

/* POST - process /contacts_list/add page */
router.post('/add', ProcessAddPage);

/* POST - process /contacts_list/edit/:id page */
router.post('/edit/:id', ProcessEditPage);

/* GET - process /contacts_list/delete/:id */
router.get('/delete/:id', ProcessDeletePage);