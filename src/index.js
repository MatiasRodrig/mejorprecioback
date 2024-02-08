import app from './app.js'
import {URI} from './db.js' 
import mongoose from 'mongoose'





// Connect to the Mongo Data Base

const connectDB = async () => {
    try {
      await mongoose.connect(URI);
      console.log("MongoDB is connected");
    } catch (error) {
      console.error(error);
    }
  };


connectDB()

// Running the app

app.listen(3000, () => {
    console.log("Server running on port 3000");
})