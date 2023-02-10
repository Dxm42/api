const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();


// function myMiddleware(request, response, next){
//     console.log("you went through the middleware");

//    if(!request.body.isAdmin){
//         return response.json({message: "User unauthorized"})
//    };

//     next();
// }

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);

module.exports = usersRoutes;