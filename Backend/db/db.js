import mongoose from "mongoose";

function connect(){
    mongoose.connect(process.env.MONGODB)
    .then(()=>{
        console.log('DB is connected')
    })
    .catch((err)=>{
        console.log('error',err)
    })
}

export default connect;