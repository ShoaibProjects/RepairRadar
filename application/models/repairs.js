import mongoose from 'mongoose';

const repairSchema = new mongoose.Schema({
    userID: { type: String, required: true, unique: true },
    servicemanID: { type: String, required: true, unique: true },
    address: { type: String},
    serviceType: { type: String},
    issue: { type: String},
    repairStatus: { type: String},
    fixingPrice: { type: Number},
  }, { timestamps: true });
  

//   repairSchema.index({ email: 'text' });
// Create and export the model
const Repair = mongoose.model('Repair', repairSchema);
export default Repair;
