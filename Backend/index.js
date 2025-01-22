import express ,{json} from "express";
import { route } from './routes/Route.js';
import cors from 'cors';
const app=express();

app.use(
    cors({ 
      origin: "http://localhost:3000",
    })
  );
app.use(json());
app.use('/',route)


const port =5000;
app.listen(port,()=>{
    console.log(`server is listening to ${port}`)
})