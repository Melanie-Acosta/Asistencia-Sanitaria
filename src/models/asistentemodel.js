import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const AsistenteModel = sequelize.define(
"Asistente",
{
    // Model attributes are defined here
    name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    },
    lastname: {
    type: DataTypes.STRING(100),
    allowNull: false,
    },
    gmail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    },
    password: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    },
    descripcion: {
    type: DataTypes.STRING(500),
    unique: true,
    defaultValue: 0,
    },
    },
    {
    // Other model options go here
    // createdAt: "created_at",
    // updatedAt: false,
    // timestamps: false,
    },
);