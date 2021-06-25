module.exports = (schema, sequelize, sequelizeDefinition) => {
    return sequelize.define('patient', {
        id: { type: sequelizeDefinition.INTEGER,
              autoIncrement: true,
              primaryKey: true         },
        firstname: { type: sequelizeDefinition.STRING },
        lastname: { type: sequelizeDefinition.STRING },
        email: { type: sequelizeDefinition.STRING },
        gender: { type: sequelizeDefinition.STRING },
        birthdate: { type: sequelizeDefinition.STRING },
        created_at: { type: sequelizeDefinition.DATE },
        updated_at: { type: sequelizeDefinition.DATE },
        },{
            timestamps: false,
            tableName: 'patient',
            schema: schema
        }
    )
}
