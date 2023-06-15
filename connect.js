const mongoose = require('mongoose');

// Replace 'your_database_url' with the actual connection URL for your MongoDB database
const uri = 'mongodb://localhost:27017';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const db = mongoose.connection;
  
  // Event handlers for successful connection and error
  db.on('connected', () => {
    console.log('Connected to MongoDB');
  });
  
  db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
