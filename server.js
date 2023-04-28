import dotenv from "dotenv";
dotenv.config();
import express from "express";

const port = process.env.PORT || 8000;
const app = express();
import cors from 'cors'
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import categoryRoutes from './routes/categoryRoutes.js'
import productRoute from './routes/productRoute.js'
connectDB();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoute);

app.listen(port,()=>{
    console.log(`OK :) ${port}`);
})