import mongoose from "mongoose";
import {DB_NAME} from "../constraint.js";


const connectDB = async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MONGODB conect !! DB HOST: $ {connectionInstance.connection.host}`);
    }catch (error) {
        console.log("MONGODB CONNECTION faild", error);
        process.exit(1)
    }
}

export default  connectDB