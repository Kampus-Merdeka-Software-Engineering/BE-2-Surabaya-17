const db = require("../models");

const Reservation = db.reservation;

const Op = db.Sequelize.Op;

exports.createReservation = (req, res) => {
    Reservation.create({
        name: req.body.name,
        branch: req.body.branch,
        subject: req.body.subject,
    }).then(async (newReservation) => {
        let obj = {
            name: newReservation.name,
            branch: newReservation.branch,
            subject: newReservation.subject,
        }

        res.send({ message: "Reservation created successfully!", data: obj });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}