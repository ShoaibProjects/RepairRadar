import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String},
  }, { timestamps: true });
  

  userSchema.index({ email: 'text' });
// Create and export the model
const User = mongoose.model('User', userSchema);
export default User;
