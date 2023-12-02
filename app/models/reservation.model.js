module.exports = (sequelize, Sequelize) => {
    const Reservation = sequelize.define("reservations", {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        time: {
            type: Sequelize.TIME,
            allowNull: false,
        },
        people: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        branch: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        subject: {
            type: Sequelize.TEXT('long'),
            allowNull: false,
        },
    });

    return Reservation;
};