import mongoose from "mongoose";
import Questions from "../models/Question.js";
// import schema with .js extension

export const postAnswer = async (req, res) => {
  const { id: _id } = req.params;
  const { noOfAnswers, answerBody, userAnswered } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).send("Question unvailable...");
  }
  upUdateNoOfQuestions(_id, noOfAnswers)

  try {
    const updatedQuestion = await Questions.findOneAndUpdate(_id, {
      $addToSet: { 'answer': [{ answerBody, userAnswered, userId: req.userId }] },
    });
    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(400).json(error);
  }
};


const upUdateNoOfQuestions = async(_id, noOfAnswers) => {
    try {
        await Questions.findByIdAndUpdate( _id, {$set: {'noOfAnswers': noOfAnswers}})
    } catch (error) {
        console.log(error)
    }
}