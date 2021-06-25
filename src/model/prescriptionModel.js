module.exports = (schema, sequelize, sequelizeDefinition) => {
    return sequelize.define('prescription', {
        id: { type: sequelizeDefinition.INTEGER,
              autoIncrement: true,
              primaryKey: true         },
        patient_name: { type: sequelizeDefinition.STRING },
        patient_age: { type: sequelizeDefinition.STRING },
        doctor_sign: { type: sequelizeDefinition.STRING },
        rx : { type: sequelizeDefinition.STRING },
        created_at: { type: sequelizeDefinition.DATE },
        updated_at: { type: sequelizeDefinition.DATE },
        },{
            timestamps: false,
            tableName: 'prescription',
            schema: schema
        }
    )
}
