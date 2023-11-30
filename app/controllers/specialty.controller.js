const db = require("../models");

const Specialty = db.specialty;

exports.getAll = (req, res) => {
    Specialty.findAll({
        limit: req.query.limit ? parseInt(req.query.limit) : 10,
        offset: req.query.offset ? parseInt(req.query.offset) : 0
    }).then((specialties) => {
        res.send({ message: "Data fetched successfully!", data: specialties });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}