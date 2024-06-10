const mongoose = require('mongoose');

const packageSchema = mongoose.Schema({
    packagename: { type: String, required: true },
    services: { type: [String], required: true },
    packagePrice: { type: String, required: true },
    imageUrl: { type: String, required: true },
    providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'provider', required: true }, // Assuming you have a provider model
});

const package = mongoose.model('package', packageSchema);

module.exports = { package };
