import mongoose, { ConnectOptions } from "mongoose";


const mongodbURL = "mongodb://localhost:27017";
const mongodbName = "auth_collection";   

const databaseUrl = `${mongodbURL}/${mongodbName}`;

mongoose
  .connect(databaseUrl)
  .then(() => {
    console.log(`Mongo db connection successfull at host : ${databaseUrl} `);
  })
  .catch((error) => {
    console.log(`db connection failed, somthing went wrong`);
  });

const db = mongoose.connection;

db.on("disconnected", () => {
  console.log(`database disconnected from mongo db`);
});

export default db;
