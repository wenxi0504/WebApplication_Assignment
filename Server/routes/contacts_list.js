"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const contacts_list_1 = require("../Controllers/contacts_list");
router.get('/', contacts_list_1.DisplayContacts_ListPage);
router.get('/add', contacts_list_1.DisplayAddPage);
router.get('/edit/:id', contacts_list_1.DisplayEditPage);
router.post('/add', contacts_list_1.ProcessAddPage);
router.post('/edit/:id', contacts_list_1.ProcessEditPage);
router.get('/delete/:id', contacts_list_1.ProcessDeletePage);
//# sourceMappingURL=contacts_list.js.map