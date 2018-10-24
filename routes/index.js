var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/index', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'homes'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact', menuId:'contact'});
});

router.get('/services', function(req, res, next) {
  res.render('services', {page:'Services', menuId:'services'});
});

router.get('/work', function(req, res, next) {
  res.render('work', {page:'Work', menuId:'work'});
});

router.get('/blog', function(req, res, next) {
  res.render('blog', {page:'Blog', menuId:'blog'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {page:'About', menuId:'about'});
});

router.get('/work-single', function(req, res, next) {
  res.render('work-single', {page:'Work Single', menuId:'work-single'});
});


module.exports = router;
