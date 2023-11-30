const db = require("../models");

const Branch = db.branch;

exports.getAll = (req, res) => {
    Branch.findAll({
        limit: req.query.limit ? parseInt(req.query.limit) : 10,
        offset: req.query.offset ? parseInt(req.query.offset) : 0
    }).then((branches) => {
        res.send({ message: "Data fetched successfully!", data: branches });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}