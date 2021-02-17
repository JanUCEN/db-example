const express = require('express');
const router = express.Router();
const Report = require('../models/report');



/* GET reports page. */
router.get('/', async function (req, res, next) {
    const reports = await Report.find();
    const data = reports.map(report=>{
        return {
            title:report.title,
            location:report.location,
            notes:report.notes,
            date:report.date
        }
    });
    console.log(data)
    res.render('index', { title: 'Reports', data:data });
});

/* CREATE report. */
router.post('/', async function (req, res, next) {
    const report = await new Report({
        title: req.body.title,
        notes: req.body.notes,
        location:req.body.location,
    })
    await report.save();
    res.redirect('/reports');

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
