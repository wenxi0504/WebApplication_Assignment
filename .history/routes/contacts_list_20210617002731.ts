import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type clothing controller

import {DisplayAddPage, DisplayContacts_ListPage, DisplayEditPage,ProcessAddPage,ProcessDeletePage,ProcessEditPage} from '../Server/Controllers/contacts_list';

// import Util functions
import { AuthGuard } from '../Server/Util/index';
/* GET /contacts_list page. */
router.get('/', DisplayContacts_ListPage);

/* GET - display /contacts_list/add page. */
router.get('/add',DisplayAddPage);

/* GET - display /contacts_list/edit/:id page. */
router.get('/edit/:id',AuthGuard, DisplayEditPage);

/* POST - process /contacts_list/add page */
router.post('/add',AuthGuard,ProcessAddPage);

/* POST - process /contacts_list/edit/:id page */
router.post('/edit/:id',AuthGuard, ProcessEditPage);

/* GET - process /contacts_list/delete/:id */
router.get('/delete/:id',AuthGuard, ProcessDeletePage);

/* POST - process /contacts_list/edit/:id page */
router.post('/delete/:id',AuthGuard, ProcessDeletePage);