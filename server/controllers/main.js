var express = require('express');
var router = express.Router();
var path = require('path');
const got = require('got');
const asyncMw = require('../controllers/helping_modules/asyncMiddleware');
const moment = require('moment');
const boom = require('boom');

router.get('/', async function(req, res, next) {
    res.redirect('/welcome')
});

router.get('/welcome', async function(req, res, next) {
    res.render('public/content/welcome', { layout: "empty", page_title: 'Welcome', page_description:" " });
});

router.get('/overview', async function(req, res, next) {
    res.render('public/course_overview', { layout: "candidate", no_navbar: true, page_title: 'Welcome', page_description:" " });
});

router.get('/day1', async function(req, res, next) {
    res.render('public/content/day1', { layout: "candidate", no_navbar: true, page_title: 'Day 1', page_description:" " });
});

router.get('/day2', async function(req, res, next) {
    res.render('public/content/day2', { layout: "candidate", no_navbar: true, page_title: 'Day 2', page_description:" " });
});

router.get('/day3', async function(req, res, next) {
    res.render('public/content/day3', { layout: "candidate", no_navbar: true, page_title: 'Day 3', page_description:" " });
});

router.get('/day4', async function(req, res, next) {
    res.render('public/content/day4', { layout: "candidate", no_navbar: true, page_title: 'Day 4', page_description:" " });
});

router.get('/day5', async function(req, res, next) {
    res.render('public/content/day5', { layout: "candidate", no_navbar: true, page_title: 'Day 5', page_description:" " });
});

router.get('/day6', async function(req, res, next) {
    res.render('public/content/day6', { layout: "candidate", no_navbar: true, page_title: 'Day 6', page_description:" " });
});

router.get('/dashboard',async function(req, res, next) {
    week = []; for (i = 0; i < 12; i++) {week.push(true);}
    res.render('public/dashboard', { layout: "candidate", week: week, page_title: 'Welcome', page_description:" " });
});

router.get('/leaderboard', async function(req, res, next) {
    res.render('public/leaderboard', { layout: "candidate", page_title: 'Welcome', page_description:" " });
});

router.get('/internship',async function(req, res, next) {
    res.render('public/internship', { layout: "candidate", page_title: 'Welcome', page_description:" " });
});

router.route('/quiz').get(async function(req, res, next) {
    res.render('public/quiz', { layout: "empty", page_title: 'Flight Details', page_description:" " });
}).post(async function(req, res, next) {
    console.log(req.body);
    res.json(req.body)
})


router.get('/logout', asyncMw(async function (req, res) {
    res.redirect('/logout-success')
}));

router.get('/checkout', asyncMw(async function (req, res) {
    res.render('public/checkout', { layout: "candidate", page_title: 'Checkout', new_css: true, page_description:" " });
}));

router.get('/payment-overview', asyncMw(async function (req, res) {
    res.render('public/payment_overview', { layout: "candidate", page_title: 'Payment Overview', page_description:" " });
}));

router.get('/logout-success', (req,res,next)=>{
    res.render('public/logout_success', {layout: "candidate", no_navbar: true, page_title: 'Logged Out'});
});

router.get('/error', function(req, res, next) {
    res.render('public/error', { layout: "empty", page_title: 'Error'});
});

router.get('/robots.txt', (req,res,next)=>{
    res.sendFile(path.resolve('public/robots.txt') );
});

module.exports = router;
