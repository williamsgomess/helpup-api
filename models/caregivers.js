module.exports = (sequelize, DataType) => {
    const Caregivers = sequelize.define("Caregivers", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        gender: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        address: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        location: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        isGraduate: {
            type: DataType.BOOLEAN,
        },
        hasCourse: {
            type: DataType.BOOLEAN,
        }
        
    });
    
    Caregivers.associate = (models) => Caregivers.hasMany(models.Calls);

    return Caregivers;
};
