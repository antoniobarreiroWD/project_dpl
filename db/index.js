
const mongoose = require('mongoose');



const MONGO_URI = process.env.MONGODB_URI || "mongodb+srv://torichu87:OVFaUPJN7R4XIRD1@cluster0.lucff1b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";




mongoose.connect(MONGO_URI)
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });