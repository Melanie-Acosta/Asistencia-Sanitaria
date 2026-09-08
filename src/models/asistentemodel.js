import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const assistantModel = sequelize.define("User", {
    name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    },
    email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    },
    password: {
    type: DataTypes.STRING(100),
    allowNull: false,
    },
    person_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "assistants",
            key: "id",
        }
    }
},);

//sistantModel.belongsTo(PersonModel, { foreignKey: "person_id", as:"owner" });

//rsonModel.hasOne(assistantModel, { foreignKey: "person_id", as: "user"});