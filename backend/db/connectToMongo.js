import mongoose from 'mongoose';

const connectToMongo=async() => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected to MongoDb");
    }
    catch(e){
        console.log("Error in connecting 2 ",e.message);
    }

};

export default connectToMongo;