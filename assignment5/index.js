var express = require('express');
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('public.exercise1', { title: 'Express' });
  res.sendFile("exercise1.html", {root: path.join(__dirname, './public')});
});


/* Handle Form Submission (POST). */
router.post('/submit', function(req, res, next) {

    let name = req.body.firstName+" "+req.body.lastName;
    let email = req.body.email; 
    let comments = req.body.comments;

    name = (name != undefined) ? name : "N/A";
    email = (email != undefined) ? email : "N/A";
    comments = (comments != undefined) ? comments : "N/A";
    
    res.status(200);
    res.write("name:    "+ name);
    res.write("\nemail:   "+email);
    res.write("\ncomment: "+comments);
    res.end();
});


module.exports = router;
