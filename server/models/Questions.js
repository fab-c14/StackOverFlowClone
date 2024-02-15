import mongoose from 'mongoose'

const QuestionSchema = mongoose.Schema({

    questionTitle: {type:String,required:"Question Must Have a title"},
    questionBody: {type:String,required:"Question Must Have a Body"},
    questionTags: {type:String,required:"Question Must Have a Tag"},
    noOfAnswers:{type:Number,default:0},
    upVote:{type:[String],default:[]},
    downVote:{type:[String],default:[]},
    userPosted:{type:[String],required:"Question must have an author"},
    userID: {type:String},
    askedOn:{type:Date,default:Date.now},
    answers:[{
        answerBody:String,
        userAnswered:String,
        userId:String,
        answeredOn:{type:Date,default:Date.now}
    }]
})

export default mongoose.model('Question',QuestionSchema)