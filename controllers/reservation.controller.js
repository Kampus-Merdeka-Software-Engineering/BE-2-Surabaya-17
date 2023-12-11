const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.createReservation = (req, res) => {
    Reservation.create({
        name: req.body.name,
        phone: req.body.phone,
        date: req.body.date,
        time: req.body.time,
        people: req.body.people,
        branch: req.body.branch,
        subject: req.body.subject,
    }).then(async (newReservation) => {
        let obj = {
            name: newReservation.name,
            phone: newReservation.phone,
            date: newReservation.date,
            time: newReservation.time,
            people: newReservation.people,
            branch: newReservation.branch,
            subject: newReservation.subject,
        }

        res.send({ message: "Reservation created successfully!", data: obj });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}
