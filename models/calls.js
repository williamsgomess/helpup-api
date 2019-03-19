module.exports = (sequelize, DataType) => {
    const Calls = sequelize.define("Calls", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        done: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        informations: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        callsValue: {
            type: DataType.DOUBLE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    Calls.associate = (models) => Calls.belongsTo(models.Caregivers);

    return Calls;
};
