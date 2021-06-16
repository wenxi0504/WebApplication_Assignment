"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessEditPage = exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplayContacts_ListPage = void 0;
const contacts_list_1 = __importDefault(require("../Models/contacts_list"));
function DisplayContacts_ListPage(req, res, next) {
    contacts_list_1.default.find((err, contactCollection) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('contacts_list', { title: 'contacts_list', page: 'contacts_list', contact: contactCollection });
    });
}
exports.DisplayContacts_ListPage = DisplayContacts_ListPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    contacts_list_1.default.findById(id, {}, {}, (err, contactItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('edit/:id', { title: 'Edit', page: 'update', contact: contactItemToEdit });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function DisplayAddPage(req, res, next) {
    res.render('contacts_list', { title: 'Add', page: 'update', contact: '' });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedContactItem = new contacts_list_1.default({
        "_id": id,
        "ContactName": req.body.ContactName,
        "ContactNumber": req.body.ContactNumber,
        "EmailAddress": req.body.EmailAddress
    });
    contacts_list_1.default.updateOne({ _id: id }, updatedContactItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/edit/:id');
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessAddPage(req, res, next) {
    let newContact = new contacts_list_1.default({
        "ContactName": req.body.ContactName,
        "ContactNumber": req.body.ContactNumber,
        "EmailAddress": req.body.EmailAddress
    });
    contacts_list_1.default.create(newContact, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contacts_list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    contacts_list_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contacts_list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=contacts_list.js.map