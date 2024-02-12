import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

dotenv.config();
console.log("Status of port: ", process.env.PORT);
const CONNECTION_URL = process.env.CONNECTION_URL;
console.log("Status of URI :",CONNECTION_URL);
const PORT= process.env.PORT;

//import ('dot-env').config();
try{
    mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true })
            .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
            .catch(error => console.log(error.message));
    // mongoose.set('useFindAndModify', false);
}catch(error){
    console.log("Errors: ", error);
}

const app = express();

app.use(cors());

app.use('/posts', postRoutes);
app.use(bodyParser.json({limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }));
