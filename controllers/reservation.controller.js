const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.createReservation = async (req, res) => {
    try {
        const { name, phone, date, time, people, branch, subject } = req.body;

        // Validasi input sebelum membuat reservasi
        if (!name || !phone || !date || !time || !people || !branch || !subject) {
            return res.status(400).send({ message: "Semua bidang harus diisi" });
        }

        const newReservation = await prisma.reservation.create({
            data: {
                name,
                phone,
                date,
                time,
                people,
                branch,
                subject,
            }
        });

        const obj = {
            name: newReservation.name,
            phone: newReservation.phone,
            date: newReservation.date,
            time: newReservation.time,
            people: newReservation.people,
            branch: newReservation.branch,
            subject: newReservation.subject,
        };

        res.status(201).send({ message: "Reservasi berhasil dibuat!", data: obj });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send({ message: "Terjadi kesalahan saat membuat reservasi" });
    } finally {
        await prisma.$disconnect();
    }
};
