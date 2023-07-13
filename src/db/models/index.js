const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        user_id: {
          type: DataTypes.UUID,
          primaryKey: true
        },
        email: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING
        },
      }, {
    });
    
    const Animal = sequelize.define('Animal', {
        animal_name: {
          type: DataTypes.STRING,
        },
        type: {
          type: DataTypes.STRING
        },
        breed: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING
        },
        sex: {
            type: DataTypes.STRING
        },
        weight: {
            type: DataTypes.BIGINT
        },
        ev : {
            type: DataTypes.BIGINT
        },
        color: {
            type: DataTypes.STRING
        },
        height: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.BIGINT
        }
      }, {
     });
    
    const Shed = sequelize.define('Shed', {
        shed_name: {
          type: DataTypes.STRING,
        }
      }, {
    });
    
    const doctors = sequelize.define('Doctor', {
        doctor_name: {
          type: DataTypes.STRING,
        },
        contact: {
            type: DataTypes.BIGINT
        }
      }, {
    });
    
    const vaccine = sequelize.define('Vaccine', {
        vaccine_name: {
          type: DataTypes.STRING,
        },
        vaccine_date: {
            type: DataTypes.DATE
        }
      }, {
    }); 
    
    const expense = sequelize.define('Expense', {
        description: {
          type: DataTypes.STRING,
        },
        amount: {
            type: DataTypes.BIGINT
        }
      }, {
    });  
    
    const weight = sequelize.define('Expense', {
        aid: {
          type: DataTypes.STRING,
        },
        weight: {
            type: DataTypes.BIGINT
        },
        weight_date: {
            type: DataTypes.DATE
        }
      }, {
    });
    sequelize.sync({alter: true})
} 

