const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema({
    job: { type: String, required: true }, // e.g., 'Best Buy', 'Delta Hotels'
    date: { type: Date, required: true }, // Date of the shift
    hours: { type: Number, required: true }, // Number of hours worked
});
shiftSchema.index({ job: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('Shift', shiftSchema);