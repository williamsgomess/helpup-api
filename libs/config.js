import Sequelize from 'sequelize';

const Op = Sequelize.Op;
module.exports = {
    database: 'helpup',
    username: 'root',
    password: '9655',
    params: {
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        operatorAliases: Op,
    }
};
