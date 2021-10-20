let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let contactController = require('../controllers/contact');

// helper function for guard purpose
function requireAuth(req, res, next)
{
    // check if the user is logged in 
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

// /* GET Route for the contact List page - READ Operation */
router.get('/', contactController.displayContactList);
    
// /* GET Route for displaying the add page - CREATE Operation */
router.get('/add', requireAuth, contactController.displayAddPage);

/* Post Route for processing the add page - CREATE Operation */
router.post('/add', requireAuth, contactController.processAddPage);

/* GET Route for displaying the edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

/* POST Route for the Processing the edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, contactController.processEditPage);

/* GET tp perform deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;