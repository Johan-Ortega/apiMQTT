module.exports = (sequelize, Sequelize)=> {
    const Tutorial = sequelize.define("tutorial", {
        nombreC:{
            type:  Sequelize.STRING
        },
        temCent:{
            type:  Sequelize.DOUBLE
        },
        temSuDer:{
            type:  Sequelize.DOUBLE
        },
        temSulzq:{
            type:  Sequelize.DOUBLE
        },
        estadoP: {
            type: Sequelize.BOOLEAN
        },
        estadoR: {
            type: Sequelize.BOOLEAN
        },
        velocidad:{
            type: Sequelize.DOUBLE 
        }

    });
    return Tutorial;
};