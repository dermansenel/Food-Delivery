import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

//db Connection
connectDB();

app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Use the correct variable name
});


//mongodb+srv://dermansenel:123456senel@cluster0.2iegs.mongodb.net/?