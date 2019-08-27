import Sequelize from 'sequelize';
import sequelize from './db-connection';

const User = sequelize.define('user', {
    id: {
        type: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.NUMBER,
        allowNull: false
    }
},
{
    timestamps: true,
    paranoid: true,
    underscored: true
});

export default User;
