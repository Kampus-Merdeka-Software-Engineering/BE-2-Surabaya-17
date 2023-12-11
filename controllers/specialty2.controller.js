const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAll = async (req, res) => {
  try {
    const specialties = await prisma.specialty2.findMany({
      take: req.query.limit ? parseInt(req.query.limit) : 10,
      skip: req.query.offset ? parseInt(req.query.offset) : 0,
    });
    res.send({ message: 'Data fetched successfully!', data: specialties });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
