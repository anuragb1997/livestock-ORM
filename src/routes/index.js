const { Router } = require("express");
const {
	getUsers,
	register,
	login,
	protected,
	logout,
	getAnimal,
	sendAnimal,
	getExpense,
	sendExpense,
	getAnimals,
	updateAnimal,
	insertShed,
	getsheds,
} = require("../controllers");

const usersRoute = require("./users");
const animalsRoute = require("./animals");
const shedsRoute = require("./sheds");
const doctorsRoute = require("./doctors");
const foodsRoute = require("./foods");
const expensesRoute = require("./expense");
const weightsRoute = require("./weights");
const vaccinesRoute = require("./vaccines");

module.exports = (params) => {
	const {
		validationMiddleware,
	} = require("../middlewares/validations-middleware");
	const { registerValidation, loginValidation } = require("../validators/auth");
	const { userAuth } = require("../middlewares/auth-middleware");
	const router = Router();
	router.use("/user", usersRoute(params.userService));
	router.use("/animal", animalsRoute(params.animalService));
	router.use("/shed", shedsRoute(params.shedService));
	router.use("/doctor", doctorsRoute(params.doctorService));
	router.use("/food", foodsRoute(params.foodService));
	router.use("/expense", expensesRoute(params.expenseService));
	router.use("/weight", weightsRoute(params.weightService));
	router.use("/vaccine", vaccinesRoute(params.vaccineService));

	// router.post("/sheds", insertShed);
	// router.get("/get-shed", getsheds);

	router.get("/protected", userAuth, protected);
	router.post("/register", registerValidation, validationMiddleware, register);
	router.post("/login", loginValidation, validationMiddleware, login);
	router.get("/logout", logout);
	//ROUTES FOR THE ANIMAL TABLE
	// router.get("/get-animals", getAnimals);
	// router.get("/get-animal/:id", getAnimal);
	// router.post("/animals", sendAnimal);
	// router.put("/get-animal/:id", updateAnimal);
	//ROUTES FOR THE EXPENSE TABLE
	// router.get("/get-expenses", getExpense);
	// router.post("/expenses", sendExpense);
	return router;
};
