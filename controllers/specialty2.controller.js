// Mengimpor PrismaClient dari modul @prisma/client
const { PrismaClient } = require('@prisma/client');

// Menginisialisasi PrismaClient untuk berinteraksi dengan database
const prisma = new PrismaClient();

// Ekspor fungsi getAllSpecialties2 yang dapat digunakan di tempat lain
exports.getAllSpecialties2 = async (req, res) => {
  try {
    // Mengambil nilai limit dari query parameter jika ada, default: 10
    const take = req.query.limit ? parseInt(req.query.limit) : 10;
    
    // Mengambil nilai offset dari query parameter jika ada, default: 0
    const skip = req.query.offset ? parseInt(req.query.offset) : 0;

    // Mengambil data spesialisasi dari database menggunakan Prisma
    const specialties2 = await prisma.specialties2.findMany({
      take, // Jumlah data yang diambil
      skip, // Jumlah data yang dilewati sebelum pengambilan data dimulai
    });

    // Mengirim respon berhasil dengan data yang berhasil diambil
    res.send({ message: 'Data fetched successfully!', data: specialties2 });
  } catch (err) {
    // Menangkap dan mengirim respon jika terjadi error
    res.status(500).send({ message: err.message });
  }
};
