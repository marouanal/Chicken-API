const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    birthday: { type: Date },
    weight: { type: Number, required: true },
    steps: { type: Number, default: 0 },
    isRunning: { type: Boolean, default: false },
    farmyard: { type: mongoose.Schema.Types.ObjectId, ref: 'Farmyard' }, // Lien vers l'objet Farmyard
  });

module.exports = mongoose.model('Chicken', userSchema)