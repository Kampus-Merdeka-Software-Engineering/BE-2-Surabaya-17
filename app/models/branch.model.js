module.exports = (sequelize, Sequelize) => {
    const Branch = sequelize.define("branches", {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });

    return Branch;
};