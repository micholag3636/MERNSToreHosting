import express from "express"
import dotenv from "dotenv"
import   connectDB   from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import cors from "cors"



dotenv.config()



connectDB();


app.use(cors())

const app = express()
app.use(express.json())

app.use("/api/products", productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server runnign on port ${PORT}`))