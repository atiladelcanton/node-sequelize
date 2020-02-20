const express = require("express");
const routes = express.Router();
const UserController = require("./controller/UserController");
const AddressesController = require("./controller/AddressesController");
const TechController = require("./controller/TechController");
const ReportController = require("./controller/ReportController");

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

routes.get("/users/:user_id/addresses", AddressesController.index);
routes.post("/users/:user_id/addresses", AddressesController.store);

routes.get("/users/:user_id/techs", TechController.index);
routes.post("/users/:user_id/techs", TechController.store);
routes.delete("/users/:user_id/techs", TechController.delete);

routes.get("/report", ReportController.show);

module.exports = routes;
