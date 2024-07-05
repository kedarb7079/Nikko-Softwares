import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const mongoURI= process.env.MONGO_URI;

// 'mongodb://127.0.0.1:27017/CloudNote1?directConnection=true'
// mongodb://localhost:27017/
// mongodb://127.0.0.1:27017/?directConnection=true


const connectionParams={
    useNewUrlParser: true,
      useUnifiedTopology: true 
}

const connectmongo=async()=>{

// const mon=await mongoose.connect(mongoURI,connectionParams)

// console.log("connected successfully to mongodb")

    connect(mongoURI,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

}


export default connectmongo;