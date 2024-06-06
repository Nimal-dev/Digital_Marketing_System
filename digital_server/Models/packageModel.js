// packageModel.js
const mongoose = require("mongoose");

const packageSchema = mongoose.Schema({
    packagename: { type: String, required: true },
    services: { type: [String], required: true },
    packagePrice: { type: String, required: true },
    
});

const package = mongoose.model("package", packageSchema);

module.exports = { package };
