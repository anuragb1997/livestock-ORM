const { Sequelize, DataTypes } = require("sequelize");

module.exports = async (sequelize) => {
	const User = sequelize.define(
		"User",
		{
			// id: {
			// 	type: DataTypes.INTEGER,
			// 	allowNull: false,
			// 	unique: true,
			// 	primaryKey: true,
			// },
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
			// id: {
			// 	type: DataTypes.INTEGER,
			// 	allowNull: false,
			// 	unique: true,
			// 	primaryKey: true,
			// },
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
			// id: {
			// 	type: DataTypes.INTEGER,
			// 	allowNull: false,
			// 	unique: true,
			// 	primaryKey: true,
			// },
			name: {
				type: DataTypes.STRING,
			},
		},
		{}
	);

	const Doctor = sequelize.define(
		"Doctor",
		{
			// id: {
			// 	type: DataTypes.INTEGER,
			// 	allowNull: false,
			// 	unique: true,
			// 	primaryKey: true,
			// },
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
			// id: {
			// 	type: DataTypes.INTEGER,
			// 	allowNull: false,
			// 	unique: true,
			// 	primaryKey: true,
			// },
			name: {
				type: DataTypes.STRING,
			},
		},
		{}
	);

	const Expense = sequelize.define(
		"Expense",
		{
			// id: {
			// 	type: DataTypes.INTEGER,
			// 	allowNull: false,
			// 	unique: true,
			// 	primaryKey: true,
			// },
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
			// id: {
			// 	type: DataTypes.INTEGER,
			// 	allowNull: false,
			// 	unique: true,
			// 	primaryKey: true,
			// },
			weight: {
				type: DataTypes.BIGINT,
			},
		},
		{}
	);

	const Food = sequelize.define(
		"Food",
		{
			// id: {
			// 	type: DataTypes.INTEGER,
			// 	allowNull: false,
			// 	unique: true,
			// 	primaryKey: true,
			// },
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
			// id: {
			// 	type: DataTypes.INTEGER,
			// 	allowNull: false,
			// 	unique: true,
			// 	primaryKey: true,
			// },
			pedigreee: {
				type: DataTypes.STRING,
			},
		},
		{}
	);

	const Todo = sequelize.define(
		"Todo",
		{
			// id: {
			// 	type: DataTypes.INTEGER,
			// 	allowNull: false,
			// 	unique: true,
			// 	primaryKey: true,
			// },
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
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	});
	Animal.belongsTo(User);

	User.hasMany(Expense, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	});
	Expense.belongsTo(User);

	Animal.hasMany(Weight, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	});
	Weight.belongsTo(Animal);

	Shed.hasMany(Animal, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	});
	Animal.belongsTo(Shed);

	Shed.hasMany(Food, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	});
	Food.belongsTo(Shed);

	Doctor.hasMany(Vaccine, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	});
	Vaccine.belongsTo(Doctor);

	Animal.hasMany(Vaccine, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	});
	Vaccine.belongsTo(Animal);

	User.hasMany(Pedigree, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	});
	Pedigree.belongsTo(User);

	Shed.hasMany(Pedigree, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	});
	Pedigree.belongsTo(Shed);


	User.hasMany(Todo, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	});
	Todo.belongsTo(User);

	sequelize.sync();
};
