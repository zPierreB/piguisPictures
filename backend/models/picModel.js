import { Sequelize } from "sequelize";
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Picture = db.define('images', {
    path: {
        type: DataTypes.STRING
    },
    alt: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Picture;