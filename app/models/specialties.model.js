module.exports = (sequelize, Sequelize) => {
    const Specialties = sequelize.define("Specialties", {
        name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.STRING
        },
    });

    return Specialties;
};