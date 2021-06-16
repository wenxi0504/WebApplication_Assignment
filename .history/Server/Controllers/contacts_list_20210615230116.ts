import express, { Request, Response, NextFunction } from 'express';

// contact Model Reference - db.contact
import  contact from "../Models/contacts_list";


// Display Functions

//(R)ead in CRUD
export function  DisplayContacts_ListPage(req: Request, res: Response, next: NextFunction): void
{
    // db.contact.find()
    contact.find((err, contactCollection) =>
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        
        res.render('contacts_list', { title: 'contacts_list', page: 'contacts_list', contact: contactCollection  });
    });
}

// Display (E)dit page
export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // pass the id to the db

    // db.contact.find({"_id": id})

    contact.findById(id, {}, {}, (err, contactItemToEdit) => 
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        // show the edit view
        res.render('index', { title: 'Edit', page: 'update', contact: contactItemToEdit  });
    });   
    
  }

// Display (C)reate page
export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
    // show the edit view
    res.render('contacts_list', { title: 'Add', page: 'update', contact: '' });
}

// Process Functions

// Process (E)dit page
export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // instantiate a new contact Item
    let updatedContactItem = new contact
    ({
      "_id": id,
      "ContactName": req.body.ContactName,
      "ContactNumber": req.body.ContactNumber,
      "EmailAddress": req.body.EmailAddress
     
    });
  
    // find the contact item via db.contact.update({"_id":id}) and then update
    contact.updateOne({_id: id}, updatedContactItem, {}, (err) =>{
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      res.redirect('/edit/:id');
    });
}

// Process (C)reate page
export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void
{
  // instantiate a new contact
  let newContact = new contact
  ({
    "ContactName": req.body.ContactName,
    "ContactNumber": req.body.ContactNumber,
    "EmailAddress": req.body.EmailAddress
   
  });

  // db.contact.insert({contact data is here...})
  contact.create(newContact, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/contacts_list');
  });
}

// Process (D)elete page
export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

  // db.contact.remove({"_id: id"})
  contact.remove({_id: id}, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/contacts_list');
  });
  
}

