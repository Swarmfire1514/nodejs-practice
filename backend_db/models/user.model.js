const userModel = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        userPassword: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userPhoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return User;
}

module.exports = userModel;