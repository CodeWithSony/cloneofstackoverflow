import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  questionTitle: { type: String, required: "Question must have a title" },
  questionBody: { type: String, required: "Question must have a body" },
  questionTags: { type: [String], required: "Question must have a tag" },
  userId: { type: String },
  userPosted: { type: String },
  askedOn: { type: Number, default: 0 },
  noOfAnswers: { type: Number, default: 0 },
  upVotes: { type: [String], default: [] },
  downVotes: { type: [String], default: [] },
  answer: [
    {
      answerBody: String,
      userAnswered: String,
      userId: String,
      userAnsweredOn: { type: Date, default: Date.now },
    },
  ],
});

export default mongoose.model("Question", questionSchema);

// here Question is for questions collection because Mongoose automatically looks for the plural, lowercased version of your model name
