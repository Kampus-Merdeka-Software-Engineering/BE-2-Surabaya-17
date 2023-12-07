module.exports = (sequelize, Sequelize) => {
    const Branch = sequelize.define("branches", {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });

    return Branch;
};