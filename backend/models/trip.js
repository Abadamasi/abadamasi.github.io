const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
    destination: String,
    departureDate: Date,
    returnDate: Date,
    price: Number
});

module.exports = mongoose.model('Trip', TripSchema);
