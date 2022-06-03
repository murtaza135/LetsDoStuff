import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide a corresponding user']
    },
    complete: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters long']
    },
    description: String,
    deadlineDate: Date,
    tags: [String],
    important: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Todo', TodoSchema);
