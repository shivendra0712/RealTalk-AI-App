import express from 'express'
import morgan from 'morgan'
const app = express();
import connect from './db/db.js';
import userRoute from './routes/user.route.js'
connect();

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res)=>{
     res.send('hello world')
})

app.use('/users',userRoute);

export default app;