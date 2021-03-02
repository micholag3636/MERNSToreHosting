import express from "express"
const router = express.Router();

import {getAllProducts, getProductById} from "../controller/productControllers.js"




//@desc GET all products from database
//@route GET /api/products
//@access Public

router.get("/", getAllProducts)

//@desc GET a product from database by id
//@route GET /api/products
//@access Public

router.get("/:id", getProductById )
export default router


/*

async (req,res) =>{
    try{
        const products = await Product.find({})

        res.json(products)

    }catch (error){
        console.error(error)
        res.status(500).json({message: "Server Error"})


    }

})








async (req,res) =>{
    try{
        const product = await Product.find({})

        res.json(product)

    }catch (error){
        console.error(error)
        res.status(500).json({message: "Server Error"})


    }

})



*/