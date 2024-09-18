const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    user: String,
    flightId: String,
    seats: Number,
    bookingDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', BookingSchema);