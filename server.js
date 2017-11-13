// =============================================================================

// Dependencies

// =============================================================================
var express    = require("express");
var bodyParser = require("body-parser");

// Setup express app
var app = express();
var PORT = process.env.PORT || 8080;

// Require our Db models.
var db = require("./models");


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

// =============================================================================

// Require Routes

// =============================================================================
require("./routes/api-routes.js");

// Syncing our sequelize models.
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT: " + PORT);
    });
});
