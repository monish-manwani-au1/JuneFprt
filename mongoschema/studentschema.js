const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const collectionNames = require('../mongoschema/schoolschema');

const studentschema = new Schema({
  
    name: { type: String, required: true, trim: true, lowercase: true },

    rollNumber: { type: String, required: true, trim: true, lowercase: true },

    standard: { type: String, trim: true, lowercase: true },

    section: { type: String, required: true, trim: true },

    photoURL: { type: String, required: true },

    address: [{ 

        line1:{type: String, required: true},
        line2:{type: String, required: true},
        city:{type: String, required: true},
        state:{type: String, required: true},
        country:{type: String, required: true}

    }],

    parents: [{ type: mongoose.Schema.Types.ObjectId, ref: collectionNames.parents }]

});

module.exports = mongoose.model(collectionNames.student, studentschema);