import Sequelize from 'sequelize';

const Op = Sequelize.Op;
module.exports = {
  database: 'heroku_49ac9aecbcc66ae',
  username: 'b581dc31107300',
  password: '0ac80553',
  params: {
    dialect: 'mysql',
    host: 'us-cdbr-iron-east-03.cleardb.net',
    //port: 3306,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    operatorAliases: Op,
  }
};