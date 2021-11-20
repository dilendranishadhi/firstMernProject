const express=require('express');
const mongoose=require('mongoose');
const bodyParser= require('body-parser');
const cors= require('cors');
const app= express();
const postRoutes= require('./routes/posts');
app.use(bodyParser.json());
app.use(cors());
app.use(postRoutes);

const PORT= 8000;
const DB_URL='mongodb+srv://twg:twg123@cluster0.2gnse.mongodb.net/mernCrud?retryWrites=true&w=majority';
mongoose.connect(DB_URL,)
.then(()=>{
    console.log('DB CONNECTED');
})
.catch((err)=> console.log('db connection error',err));
app.listen(PORT,()=>{
    console.log(`app is running ${PORT}`)
});