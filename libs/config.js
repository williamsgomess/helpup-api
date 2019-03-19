import Sequelize from 'sequelize';

const Op = Sequelize.Op;
module.exports = {
    database: 'helpup',
    username: '',
    password: '',
    params: {
        dialect: 'sqlite',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        storage: 'helpup.sqlite',
        define: {
            underscored: true
        },
        operatorAliases: Op,
    }
};
