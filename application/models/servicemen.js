import mongoose from 'mongoose';

const servicemanSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String},
    service: { type: String},
  }, { timestamps: true });
  

  servicemanSchema.index({ email: 'text' });
// Create and export the model
const Serviceman = mongoose.model('Serviceman', servicemanSchema);
export default Serviceman;
