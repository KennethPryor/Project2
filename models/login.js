module.exports = function (sequelize, DataTypes) {
    var login = sequelize.define("login", {
        id: DataTypes.INTEGER,
        user: DataTypes.STRING,
        password: DataTypes.STRING
    }); 
    return login;
};
