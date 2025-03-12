import mongoose from "mongoose";
import { DB_NAME } from "./constants";

const mongoose = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
  } catch (error) {
    console.log("ERROR!", error);
    throw error;
  }
};

mongoose();    