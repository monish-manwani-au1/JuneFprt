const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const collectionNames = require('../mongoschema/schoolschema');

const parentschema = new Schema({
  
    name: { type: String, required: true, trim: true, lowercase: true },

    phoneNumber: { type: String, required: true, trim: true, lowercase: true },

    email: { type: String, trim: true, lowercase: true },

    occupation: { type: String, required: true, trim: true },

    designation: { type: String, required: true }


});

module.exports = mongoose.model(collectionNames.parent, parentschema);