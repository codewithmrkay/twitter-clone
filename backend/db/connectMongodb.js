import mongoose from "mongoose";
const connectMongodb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDb Connected : ", conn.connection.host)
    } catch (error) {
        console.error("error in mongodb connection : ", error.message)
        process.exit(1)
    }
}
export default connectMongodb