  
import mongoose from 'mongoose';
const Schema = mongoose.Schema; // Schema alias

const contactSchema = new Schema
({
    ContactName : String,
    ContactNumber: String,
    EmailAddress:String,
    
    
    
},

{
    collection: "contact"
});

const Model = mongoose.model("Contacts_list",contactSchema);
export default Model;