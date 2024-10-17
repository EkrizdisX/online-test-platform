const express = require('express');
const router = express.Router();

// Dummy data (later you can integrate with MongoDB)
let tests = [
  {
    id: 1,
    title: ' SEE',
    questions: [
      { question: 'what is 2+2?', options: [{text:2},{text:3},{text:4},{text:6}], answer: 4 },
      { question: 'what is blah blah blah?', options: [{text:"blah"},{text:"blah"},{text:"blah"},{text:"blah"}], answer: 'Plahhhhh' },
      {
        question: 'Select the fruit:', 
        options: [
          { text: 'Apple', image: 'https://via.placeholder.com/50?text=Apple' },
          { text: 'Banana', image: 'https://via.placeholder.com/50?text=Banana' },
          { text: 'Cherry', image: 'https://via.placeholder.com/50?text=Cherry' },
          { text: 'Date', image: 'https://via.placeholder.com/50?text=Date' }
        ],
        answer: 'Apple' 
      }
    ]
  }
];

// Fetch all tests
router.get('/', (req, res) => {
  res.json(tests);
});

// Add a new test (you can modify this later for database integration)
router.post('/', (req, res) => {
  const newTest = req.body;
  tests.push(newTest);
  res.status(201).json(newTest);
});

module.exports = router;
