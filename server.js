const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 500;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error: asd', err));

// Define your Test schema
const testSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [
    {
      question: { type: String , required: true },
      options: [
        { text: { type: String, required: true }, image: String },
      ],
      answer: { type: String, required: true },
    },
  ],
});

// Create the Test model
const Test = mongoose.model('Test', testSchema);

// Sample API route
app.get('/api/tests', async (req, res) => {
  try {
    console.log("Fetching tests...");
    const tests = await Test.find(); // Ensure this matches your MongoDB collection name
    console.log("Tests fetched:", tests);
    res.json(tests);
  } catch (error) {
    console.error('Error fetching tests:', error);
    res.status(500).json({ message: 'Error fetching tests' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
