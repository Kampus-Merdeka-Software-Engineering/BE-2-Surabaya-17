module.exports = (sequelize, Sequelize) => {
    const Specialty = sequelize.define("Specialties", {
        name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.STRING
        },
    });

    return Specialty;
};