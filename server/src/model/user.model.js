import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const userSchema = mongoose.Schema({
    username:{type:String,required:true,unique:true},
    adi:{type:String, required:true},
    soyadi:{type:String, required:true},
    eposta:{type:String, required:true,unique:true},
    password:{type:String,required:true,unique:true},
    isAdmin:{type:Boolean,required:true, default:false},
    telefonno:{type:String}
},{timestamp:{createdAt:'created_at',updatedAt:'updated_at'}})
const userModel = mongoose.model('User',userSchema);

userSchema.methods.hashPassword = function hashPassword(reqPassword){
    return bcrypt.hashSync(reqPassword,10);
}

export default mongoose.model('User',userSchema);
