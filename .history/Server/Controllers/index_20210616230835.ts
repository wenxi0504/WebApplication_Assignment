  
import express, { Request, Response, NextFunction } from 'express';

import passport from 'passport';

// create an instance of the User model
import User from '../Models/user';

// import Util functions
import { UserDisplayName } from '../Util';

// Display Functions

export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void
{
    res.render('home', { title: 'Home', page: 'home',displayName: UserDisplayName(req)});
}

export function DisplayAboutPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('aboutme', { title: 'About Me', page: 'about me', displayName: UserDisplayName(req)});
}

export function DisplayProjectsPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('projects', { title: 'Projects', page: 'projects', displayName: UserDisplayName(req)});
}

export function DisplayServicesPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('services', { title: 'Services', page: 'services', displayName: UserDisplayName(req)});
}

export function DisplayContactPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('contact', { title: 'Contact', page: 'contact', displayName: UserDisplayName(req)});
}

export function DisplayLoginPage(req: Request, res: Response, next: NextFunction): void
{
    if(!req.user)
    {
        return res.render('login', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req) });
    }

    return res.redirect('/contacts_list');
}

export function ProcessLoginPage(req: Request, res: Response, next: NextFunction): void
{
    passport.authenticate('local', (err, user, info) => {
        // are there server errors?
        if(err)
        {
            console.error(err);
            return next(err);
        }

        // are there login errors?
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }

        req.login(user, (err) =>
        // are there db errors?
        {
            if(err)
            {
                console.error(err);
                return next(err);
            }

            return res.redirect('/contacts_list');

        });
    })(req, res, next);
}

export function DisplayRegisterPage(req: Request, res: Response, next: NextFunction): void
{
    if(!req.user)
    {
        return res.render('register', { title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: UserDisplayName(req)});
    }

    return res.redirect('/contacts_list');
}

export function ProcessRegisterPage(req: Request, res: Response, next: NextFunction): void
{
    // instantiate a new User Object
    let newUser = new User
    ({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.FirstName + " " + req.body.LastName
    });

    User.register(newUser, req.body.password, (err) =>
    {
        if(err)
        {
            console.error('Error: Inserting New User');
            if(err.name == "UserExistsError")
            {
                console.error('Error: User Already Exists');
            }
            req.flash('registerMessage', 'Registration Error');

            return res.redirect('/register');
        }

        // after successful registration - login the user
        return passport.authenticate('local')(req, res, () =>{
            return res.redirect('/contacts_list');
        });
    });
}

export function ProcessLogoutPage(req: Request, res: Response, next: NextFunction): void
{
    req.logout();

    res.redirect('/login');
}