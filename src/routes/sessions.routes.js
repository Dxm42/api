const { Router } = require("express");


const SessionsController = require("../controllers/SessionsController");

const sessionController = new SessionsController();

const sessionRouter = Router();

sessionRouter.post("/", sessionController.create);

module.exports = sessionRouter;