import mongoose from "mongoose";

const msgSchema = new mongoose.Schema({
  message: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true, versionKey: false })

const Message = mongoose.model('Message', msgSchema);

export default Message;
