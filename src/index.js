const express = require("express");
const config = require("./config");
const app = express();
const Sequelize = require("sequelize");
const { PORT, CLIENT_URL } = require("./constants");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");

//import passport middleware
require("./middlewares/passport-middleware");

//initialize middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(passport.initialize());

const routes = require("./routes");
const UserService = require("./services/UserService");
const AnimalService = require("./services/AnimalService");
const ShedService = require("./services/ShedService");
const DoctorService = require("./services/DoctorService");
const FoodService = require("./services/FoodService");
const ExpenseService = require("./services/ExpenseService");
const WeightService = require("./services/WeightService");
const VaccineService = require("./services/VaccineService");

app.get("/", (req, res) => {
	return res.status(200).json("API IS WORKING");
});

const my_local_db_uri = "mysql://root:root@localhost:3306/livestock";
const actual_db = "postgres://postgres:Anurag@123@localhost/livestock";

function connectToPostgres() {
	const sequelize = new Sequelize(actual_db, {
		dialect: "postgres",
		define: {
			freezeTableName: true,
		},
	});
	try {
		sequelize.authenticate();
		console.log("seq works");
	} catch (error) {
		console.error("Error: ", error);
	}
	return sequelize;
}

config.development.postgres.client = connectToPostgres();

// console.log(config.development.postgres.client);
const userService = new UserService(config.development.postgres.client);
const animalService = new AnimalService(config.development.postgres.client);
const shedService = new ShedService(config.development.postgres.client);
const doctorService = new DoctorService(config.development.postgres.client);
const foodService = new FoodService(config.development.postgres.client);
const expenseService = new ExpenseService(config.development.postgres.client);
const weightService = new WeightService(config.development.postgres.client);
const vaccineService = new VaccineService(config.development.postgres.client);
app.use(
	"/api",
	routes({
		userService,
		animalService,
		shedService,
		doctorService,
		foodService,
		expenseService,
		weightService,
		vaccineService,
	})
);

//app start
const appStart = () => {
	try {
		app.listen(PORT, () => {
			console.log(`The app is running at http://localhost:${PORT}`);
		});
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
};

appStart();
