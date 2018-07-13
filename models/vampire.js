// first require all the things here just like you did in article.js file
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//then
const vampireSchema = new Schema({
name: {type: String, required: true, unique: true},
hair_color: {type: String, default: 'blonde'},
dob: {type: Date},
loves: [{type: String, required: true}],
location: {type: String, required: true},
gender: {type: String, required: true},
victims: {type: Number, required: true},
victims: {type: Number > 0},

});

const Vampire = mongoose.model('Vampire', vampireSchema);

module.exports = Vampire;
