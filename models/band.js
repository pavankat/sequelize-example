var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Band = sequelize.define("bands", {
  name: {
    type: Sequelize.STRING    
  }
}, {
  timestamps: false,
  freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
});
  

// Syncs with DB
Band.sync();

// Makes the Band Model available for other files (will also create a table)
module.exports = Band;
