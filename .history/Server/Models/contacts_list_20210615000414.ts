  
import mongoose from 'mongoose';
const Schema = mongoose.Schema; // Schema alias

const Contacts_listSchema = new Schema
({
    ContactName : String,
    ContactNumber: String,
    EmailAddress:String,
    
    
    
},

{
    collection: "contact"
});

const Model = mongoose.model("Contacts_list", Contacts_listSchema);
export default Model;