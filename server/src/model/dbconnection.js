import mongoose from 'mongoose';
import 'dotenv/config';
const db = mongoose.connection;

 mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true});
 db.on('open',()=>{
     console.log('Veriabanı Bağlandı');
 })
 .on('error',(err)=>{
     console.log(err)
 })
.on('close',()=>{
    console.log('Veri Tabanı Kapandı.')
})
module.exports=mongoose;