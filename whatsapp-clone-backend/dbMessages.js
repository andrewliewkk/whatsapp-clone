import mongoose from 'mongoose';

const whatsappSchema = new mongoose.Schema({
  sender: String,
  receiver: String,
  content: String,
  timestamp: Date,
  read: Boolean,
});

export default mongoose.model('messageContent', whatsappSchema);
