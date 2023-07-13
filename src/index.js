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

app.get("/", (req, res) => {
	return res.status(200).json("API IS WORKING");
});

const my_local_db_uri = "mysql://root:root@localhost:3306/livestock";
const actual_db = "postgres://postgres:Anurag@123@localhost/livestock";

function connectToPostgres() {
	const sequelize = new Sequelize(actual_db, {
		dialect: "postgres",
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
app.use("/api", routes({ userService, animalService }));

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
