const db = require("../models");

const Specialties = db.specialties;

exports.getAll = (req, res) => {
    Specialties.findAll({
        limit: req.query.limit ? parseInt(req.query.limit) : 10,
        offset: req.query.offset ? parseInt(req.query.offset) : 0
    }).then((specialties) => {
        res.send({ message: "Data fetched successfully!", data: specialties });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}