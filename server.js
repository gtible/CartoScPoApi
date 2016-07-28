// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
    app        = express(),                // define our app using express
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose'),
    cors = require('cors');

mongoose.connect('mongodb://localhost:27017/apiCarto'); // connect to our database

var Center = require('./api/models/center');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here
// on routes that end in /bears
// ----------------------------------------------------
router.route('/centers')

    // create a bear (accessed at POST http://localhost:8080/api/centers)
    .post(function(req, res) {
        
        
        var center = new Center(); 
        // Description administrative 
        center.intitule = req.body.intitule;  
        center.acronym = req.body.acronym;  
        center.codeUnite = req.body.codeUnite;
        center.directeur = req.body.directeur;  
        center.siteWeb = req.body.siteWeb; 
        center.adresses = req.body.adresses;
        center.directeur_mail = req.body.directeur_mail;
        center.phone = req.body.phone;

        center.history = req.body.history;


        center.creation = req.body.creation ;
        center.staff_number = req.body.staff_number ;
        center.permanent = req.body.permanent   ;
        center.non_permanent = req.body.non_permanent;  
        center.staff_url = req.body.staff_url;
        center.staff_url_cnrs = req.body.staff_url_cnrs;

        // ecole doctorale
        center.ed_number = req.body.ed_number;
        center.ed_name = req.body.ed_name;
        center.ed_director = req.body.ed_director;
        center.phd_number = req.body.phd_number;
        center.phd_scpo_number = req.body.phd_scpo_number;
        center.thesis_number = req.body.thesis_number;

        // thématiques de recherche
        center.cnrs_sections = req.body.cnrs_sections;
        center.political_science_topic_major_or_political_science_topic_minor = req.body.political_science_topic_major_or_political_science_topic_minor;
        center.topic_major = req.body.topic_major;
        center.topic_minor = req.body.topic_minor;
        center.subject_terms = req.body.subject_terms;
        center.research_areas = req.body.research_areas;
        center.contracts = req.body.contracts;
        center.workshops = req.body.workshops;
        center.partners = req.body.partners;
        center.evaluation = req.body.evaluation;

        // publications
        center.collections = req.body.collections;
        center.collection_title = req.body.collection_title;
        center.journal   = req.body.journal;
        center.journal_title = req.body.journal_title;
        center.edition_other = req.body.edition_other;
        center.hal = req.body.hal;
        center.repository = req.body.repository;
        center.oa_policy = req.body.oa_policy;
        center.data_repository   = req.body.data_repository;
        center.data_projects = req.body.data_projects;

        // ressources
        center.libraries_network = req.body.libraries_network;
        center.library = req.body.library;
        center.library_name = req.body.library_name;
        center.library_description = req.body.library_description;
        center.library_staff = req.body.library_staff;
        center.library_web = req.body.library_web;
        center.library_policy = req.body.library_policy;
        center.special_holdings = req.body.special_holdings;
        center.eresources = req.body.eresources;
        center.information_skills_training = req.body.information_skills_training;
        center.library_network = req.body.library_network;
        //center.etablissementsRattachement = req.body.etablissementsRattachement;     


        // save the center and check for errors
        center.save(function(err) {
            console.log("err", err);
            if (err)
                res.send(err);

            console.log("here")
            res.json({ message: 'Center created!' });
        });
        
    })

    // get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res) {
        Center.find(function(err, centers) {
            if (err)
                res.send(err);

            res.json(centers);
        });
    });

// on routes that end in /bears/:bear_id
// ----------------------------------------------------
router.route('/centers/:center_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Center.findById(req.params.center_id, function(err, center) {
            if (err)
                res.send(err);
            res.json(center);
        });
    })

     // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
    .put(function(req, res) {
        // use our bear model to find the bear we want
        Center.findById(req.params.center_id, function(err, center) {

            if (err)
                res.send(err);

            center.intitule = req.body.intitule;  // update the bears info

            // save the bear
            center.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Center updated!' });
            });

        });
    })

    // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
    .delete(function(req, res) {
        Center.remove({
            _id: req.params.center_id
        }, function(err, center) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);