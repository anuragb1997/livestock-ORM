const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	const User = sequelize.define(
		"User",
		{
			email: {
				type: DataTypes.STRING,
			},
			password: {
				type: DataTypes.STRING,
			},
		},
		{}
	);

	const Animal = sequelize.define(
		"Animal",
		{
			name: {
				type: DataTypes.STRING,
			},
			type: {
				type: DataTypes.STRING,
			},
			breed: {
				type: DataTypes.STRING,
			},
			status: {
				type: DataTypes.STRING,
			},
			sex: {
				type: DataTypes.STRING,
			},
			weight: {
				type: DataTypes.BIGINT,
			},
			ev: {
				type: DataTypes.BIGINT,
			},
			color: {
				type: DataTypes.STRING,
			},
			height: {
				type: DataTypes.STRING,
			},
			age: {
				type: DataTypes.BIGINT,
			},
			category: {
				type: DataTypes.STRING,
			},
		},
		{}
	);

	const Shed = sequelize.define(
		"Shed",
		{
			name: {
				type: DataTypes.STRING,
			},
		},
		{}
	);

	const Doctor = sequelize.define(
		"Doctor",
		{
			name: {
				type: DataTypes.STRING,
			},
			contact: {
				type: DataTypes.BIGINT,
			},
		},
		{}
	);

	const Vaccine = sequelize.define(
		"Vaccine",
		{
			name: {
				type: DataTypes.STRING,
			},
		},
		{}
	);

	const Expense = sequelize.define(
		"Expense",
		{
			description: {
				type: DataTypes.STRING,
			},
			amount: {
				type: DataTypes.BIGINT,
			},
		},
		{}
	);

	const Weight = sequelize.define(
		"Weight",
		{
			weight: {
				type: DataTypes.BIGINT,
			},
		},
		{}
	);

	const Food = sequelize.define(
		"Food",
		{
			name: {
				type: DataTypes.STRING,
			},
			quantity: {
				type: DataTypes.BIGINT,
			},
		},
		{}
	);

	const Pedigree = sequelize.define(
		"Pedigree",
		{
			pedigree: {
				type: DataTypes.STRING,
			},
		},
		{}
	);

	const Todo = sequelize.define(
		"Todo",
		{
			description: {
				type: DataTypes.STRING,
			},
			deadline: {
				type: DataTypes.DATE,
			},
		},
		{}
	);

	User.hasMany(Animal, {
		foreignKey: {
			allowNull: false,
			// name: "myUserID",
		},
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	});
	Animal.belongsTo(User);

	User.hasMany(Expense, {
		foreignKey: {
			allowNull: false,
			// name: "myUserID",
		},
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	});
	Expense.belongsTo(User);

	Animal.hasMany(Weight, {
		foreignKey: {
			allowNull: false,
			// name: "myAnimalID",
		},
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	});
	Weight.belongsTo(Animal);

	Shed.hasMany(Animal, {
		foreignKey: {
			allowNull: false,
			// name: "myShedID",
		},
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	});
	Animal.belongsTo(Shed);

	Shed.hasMany(Food, {
		foreignKey: {
			allowNull: false,
			// name: "myShedID",
		},
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	});
	Food.belongsTo(Shed);

	Doctor.hasMany(Vaccine, {
		foreignKey: {
			allowNull: false,
			// name: "myDoctorID",
		},
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	});
	Vaccine.belongsTo(Doctor);

	Animal.hasMany(Vaccine, {
		foreignKey: {
			allowNull: false,
			// name: "myVaccineID",
		},
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	});
	Vaccine.belongsTo(Animal);

	User.hasMany(Pedigree, {
		foreignKey: {
			allowNull: false,
			// name: "myUserID",
		},
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	});
	Pedigree.belongsTo(User);

	User.hasMany(Todo, {
		foreignKey: {
			allowNull: false,
			// name: "myUserID",
		},
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	});
	Todo.belongsTo(User);

	sequelize.sync();
};
