const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    return mongoose.connection.db.collection('tests').insertMany([
        {
          "title": "General Knowledge",
          "questions": [
            {
              "question": "What is the capital of France?",
              "options": [
                { "text": "Paris", "image": null },
                { "text": "London", "image": null },
                { "text": "Rome", "image": null },
                { "text": "Berlin", "image": null }
              ],
              "answer": "Paris"
            },
            {
              "question": "Which planet is known as the Red Planet?",
              "options": [
                { "text": "Earth", "image": null },
                { "text": "Mars", "image": null },
                { "text": "Jupiter", "image": null },
                { "text": "Saturn", "image": null }
              ],
              "answer": "Mars"
            }
          ]
        },
        {
          "title": "Science",
          "questions": [
            {
              "question": "What is H2O commonly known as?",
              "options": [
                { "text": "Oxygen", "image": null },
                { "text": "Water", "image": null },
                { "text": "Hydrogen", "image": null },
                { "text": "Carbon Dioxide", "image": null }
              ],
              "answer": "Water"
            },
            {
              "question": "What gas do plants absorb from the atmosphere?",
              "options": [
                { "text": "Oxygen", "image": null },
                { "text": "Carbon Dioxide", "image": null },
                { "text": "Nitrogen", "image": null },
                { "text": "Helium", "image": null }
              ],
              "answer": "Carbon Dioxide"
            }
          ]
        }
      ]
      );
  })
  .then(() => {
    console.log('Data inserted successfully');
    mongoose.connection.close();
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
