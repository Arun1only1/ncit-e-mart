import mongoose from "mongoose";

const dbUserName = process.env.DB_USER_NAME;
const dbPassword = encodeURIComponent(process.env.DB_PASSWORD);
const dbName = process.env.DB_NAME;
const dbHost = process.env.DB_HOST;

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUserName}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority&appName=School`
    );

    console.log("DB connection established...");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
  }
};

export default connectDB;
