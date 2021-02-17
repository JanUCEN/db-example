var express = require('express');
var router = express.Router();

/* GET reports page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Reports' });
});

/* CREATE report. */
router.post('/', function (req, res, next) {
    res.redirect('/');
});

/* UPDATE report. */
router.patch('/', function (req, res, next) {
    res.redirect('/');
});

/* DELETE report. */
router.delete('/', function (req, res, next) {
    res.redirect('/');
});



module.exports = router;
