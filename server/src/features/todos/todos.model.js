/* eslint-disable func-names */
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

// Provide easy method to get all non-sensitive data for given todo
TodoSchema.methods.getData = function (timestamps = true) {
  const todoDetails = this.toObject({ versionKey: false, useProjection: true });

  if (timestamps === false) {
    delete todoDetails.createdAt;
    delete todoDetails.updatedAt;
  }

  return todoDetails;
};

// Provide easy method to get all non-sensitive data for given todo
TodoSchema.query.getData = function (timestamps = true) {
  let query = this.select('-__v');
  query = timestamps === false ? this.select('-createdAt -updatedAt') : query;
  return query;
};

export default mongoose.model('Todo', TodoSchema);