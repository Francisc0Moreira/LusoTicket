var express = require('express');
var router = express.Router();

var event = require("../controllers/EventsController.js");
const authController = require('../controllers/auth');

router.get('/', authController.verifyLoginUser ,  function(req, res, next) {
    event.list(req,res);
});

router.get('/create-event', authController.verifyLoginUser , function(req, res) {
  event.create(req, res);
});

router.post('/addevent', authController.verifyLoginUser , function(req,res){
  event.save(req,res);
});

router.get('/showevents/:id', authController.verifyLoginUser ,function(req,res){
    event.show(req,res);
});

  router.get('/edit-event/:id', authController.verifyLoginUser ,function(req,res){
    event.edit(req,res);
});
  
  router.post('/update-event/:id', authController.verifyLoginUser ,function(req,res){
    event.update(req,res);
});

router.post('/delete-event/:id', authController.verifyAdmin, function(req,res){
  event.delete(req,res);
});


module.exports = router;