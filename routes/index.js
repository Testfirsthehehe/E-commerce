const express = require("express");
const router = express.Router();
const product = require("../models/product")

router.get('/', async function(req, res, next) {
  const data = await product.find();
	res.render("pages/index", {data});
  res.render('pages/index');
});


router.get('/index', async function(req, res, next) {
  const data = await product.find();
  res.render("pages/index", {data});
  res.render('pages/index');
});

router.get('/Aboutus', function(req, res) {
    res.render('pages/Aboutus');
  });

router.get('/cart', function(req, res) {
    res.render('pages/cart');
  });

router.get('/contactus', function(req, res) {
    res.render('pages/contactus');
  });

router.get('/FAQ', function(req, res) {
    res.render('pages/FAQ');
  }); 

router.get('/ForgetPass-verification', function(req, res) {
    res.render('pages/ForgetPass-verification');
  });

router.get('/ForgetPass', function(req, res) {
    res.render('pages/ForgetPass');
  });
 

router.get('/login', function(req, res) {
    res.render('pages/login');
  });
  
router.get('/product', async function(req, res) {
    const data = await product.find();
    res.render("pages/product", {data});
  });

router.post('/product', function(req, res, next) {
  console.log(123123123);
  console.log(req.body);
  var productInfo = req.body;
});

router.get('/productDetails', function(req, res) {
    res.render('pages/productDetails');
  });

router.get('/register-verification-completed', function(req, res) {
    res.render('pages/register-verification-completed');
  });

router.get('/register-verification-error', function(req, res) {
    res.render('pages/register-verification-error');
  });
  
router.get('/register-verification-sent', function(req, res) {
    res.render('pages/register-verification-sent');
  });

router.get('/register', function(req, res) {
    res.render('pages/register');
  });

router.get('/ResetPass-verification', function(req, res) {
    res.render('pages/ResetPass-verification');
  });
 
router.get('/ResetPass', function(req, res) {
    res.render('pages/ResetPass');
  });

router.get('/shipping', function(req, res) {
    res.render('pages/shipping');
  });

router.get('/T&C', function(req, res) {
    res.render('pages/T&C');
  });
 
router.get('/wishlist', function(req, res) {
    res.render('pages/wishlist');
  });
  router.get('/transaction', function(req, res) {
    res.render('pages/transaction');
  });


module.exports = router;