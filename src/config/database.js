export const sequelize = new Sequelize("asistencia_sanitaria_db", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

// Definición de la relación (Un Familiar se vincula con un Asistente)
const paciente = pacienteModel(sequelize);
const asistente = asistenteModel(sequelize);

export const startDB = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true });
        console.log("Conexión a la base de datos esta lista");
    } catch (error) {
        console.error("No se pudo conectar a la base de datos", error);
    }
};