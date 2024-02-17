import app from './app.js'
import mongoose from 'mongoose'





// Connect to the Mongo Data Base

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
      console.log("MongoDB is connected");
    } catch (error) {
      console.error(error);
    }
  };


connectDB()

// Running the app

app.listen(3001, () => {
    console.log("Server running on port 3001");
})

