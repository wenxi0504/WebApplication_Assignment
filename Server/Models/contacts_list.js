"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const Contacts_listSchema = new Schema({
    ContactName: String,
    ContactNumber: String,
    EmailAddress: String,
}, {
    collection: "contact"
});
const Model = mongoose_1.default.model("Contacts_list", Contacts_listSchema);
exports.default = Model;
//# sourceMappingURL=contacts_list.js.map