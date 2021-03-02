import express from "express"
import dotenv from "dotenv"
import   connectDB   from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import cors from "cors"



dotenv.config()



connectDB();




const app = express()
app.use(express.json())

app.use(function(req,res, next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();



})





app.use("/api/products", productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server runnign on port ${PORT}`))