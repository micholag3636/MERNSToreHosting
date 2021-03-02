import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"





const connectDB =  async () => {


  const mongouri = "mongodb+srv://Micho:CbbC1234@cluster0.cw9kz.mongodb.net/shop?retryWrites=true&w=majority"



    try{
    
   await mongoose.connect(mongouri, {
     useNewUrlParser: true,
      useUnifiedTopology: true

    })

    console.log("Connected to database")

} catch(error){
    console.log(error)
    process.exit(1)

}

}




  




export default connectDB

