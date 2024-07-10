import mongoose from "mongoose";

mongoose.connect("mongodb+srv://lpcampanholi:lpcampanholi123@cluster0.f412eyq.mongodb.net/escola?retryWrites=true&w=majority&appName=Cluster0");

const db = mongoose.connection;

export default db;
