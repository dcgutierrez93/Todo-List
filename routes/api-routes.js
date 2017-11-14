// =============================================================================

// Dependencies

// =============================================================================
var db = require("./models");

// =============================================================================

// Routes

// =============================================================================
module.exports = function(app) {
    // GET route for getting all the todos.
    app.get("/api/todos", function(req, res) {
        db.Todo.findAll({}).then(function(dbTodo) {
            res.json(dbTodo);
        });
    });

    // POST route for saving a new todo
    app.post("/api/todos", function(req, res) {
        db.todo.create({
            text    : req.body.text,
            complete: req.body.complete
        }).then(function(dbTodo) {
            res.json(dbTodo);
        })
        .catch(function(err) {
            res.json(err);
        });
    });

    // Delete route for deleting todos.
    app.delete("/api/todos/id", function(req, res) {
        db.Todo.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbTodo) {
            res.json(dbTodo);
        });
    });

    // PUT route for updating todos. We can get the updated todo data from req.body
    app.put("/api/todos", function(req, res) {
        db.Todo.update({
            text: req.body.text,
            complete: req.body.text
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(dbTodo) {
            res.json(dbTodo);
        })
        .catch(function(err) {
            res.json(err);
        });
    });
};
