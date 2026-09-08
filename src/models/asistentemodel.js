import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const AsistenteModel = sequelize.define("asistente", {
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
    asistente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "assistentes",
            key: "id",
        }
    }
},);

// Un Asistente atiende a varios Pacientes
Asistente.hasMany(Paciente, { 
    foreignKey: 'asistenteId', 
    as: 'pacientes' 
});
Paciente.belongsTo(Asistente, { 
    foreignKey: 'asistenteId', 
    as: 'asistente' 
});

export default AsistenteModel;