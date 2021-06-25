module.exports = (schema, sequelize, sequelizeDefinition) => {
    return sequelize.define('branch', {
        id: { type: sequelizeDefinition.INTEGER,
              autoIncrement: true,
              primaryKey: true         },
        name: { type: sequelizeDefinition.STRING },
        address: { type: sequelizeDefinition.STRING }
        },{       
            timestamps: false,     
            tableName: 'branch',
            schema: schema
        }
    )
}
