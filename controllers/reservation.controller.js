const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.createReservation = async (req, res) => {
    try {
        const newReservation = await prisma.reservation.create({
            data: {
                name: req.body.name,
                phone: req.body.phone,
                date: new Date(req.body.date),
                time: req.body.time, // String 
                people: req.body.people,
                branch: req.body.branch,
                message: req.body.message, // Fieldnya adalah 'message'
            },
        });

        res.send({ message: 'Reservation created successfully!', data: newReservation });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};
