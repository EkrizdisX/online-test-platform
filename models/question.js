const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  image: { type: String, default: '' } // Optional field for images
});

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [optionSchema],
  answer: { type: String, required: true }
});

const testSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [questionSchema]
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
