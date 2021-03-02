import dotenv from "dotenv"
dotenv.config()
import products from "./data/products.js"
import connectDB from "./config/db.js"
import Product from "./models/Product.js"

connectDB();

const importData = async () => {
    try{
        await Product.deleteMany({})

        await Product.insertMany(products)

        console.log("data imported")

        process.exit()



    }
    catch(error){
        console.error(error);
        process.exit(1)


    }



}
importData()