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

/* GET a single report */
router.get('/:id', async function (req, res, next) {
    const report = await Report.findById(req.params.id);
    //or findOne({_id:req.params.id})
    const data =  {
            title:report.title,
            location:report.location,
            notes:report.notes,
            date:report.date
        }
    console.log(data)
    res.render('index', { title: 'Report', data:data });
});

/* UPDATE report. */
router.put('/:id', async function (req, res, next) {
    const report = await Report.findById(req.params.id);
    report.title = req.body.title;
    report.notes = req.body.notes;
    report.location = req.body.location
    await report.save();
    res.render('index', { title: 'Report', data:report });
});

/* DELETE report. */
router.delete('/:id', async function (req, res, next) {
    await Report.deleteOne({_id:req.params.id});
    res.redirect(303,'/reports');
});



module.exports = router;
