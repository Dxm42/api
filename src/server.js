const { response } = require("express");
const express = require("express");

const app = express();

const PORT = 3333;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
});

app.get("/message/:id/:user", (request, response) =>{

    const {id ,user} = request.params
    response.send(`Id message: ${id} User: ${user}`);
});

app.get("/users", (request, response) => {
    const {page, limit} = request.query;

    response.send(`Page: ${page}. Show: ${limit}`);
})