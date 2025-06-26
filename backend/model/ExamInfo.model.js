// ongsaaa/sen/ongsaaa-sen-4e4cea7668c1db19ffeb9a5559c07323af263c80/backend/model/ExamInfo.model.js
import mongoose from "mongoose";

const PracticeMaterialSchema = new mongoose.Schema({
    name: { type: String, required: true },
    url: { type: String, required: true }
}, {_id: false}); // Setting _id to false for subdocuments if not needed as primary keys

export const ExamInfoSchema = new mongoose.Schema({
    examKey: { // To store your original string IDs like 'sat', 'act'
        type: String,
        required: [true, "Please provide a unique key for the exam"],
        unique: true,
    },
    name: {
        type: String,
        required: [true, "Please provide the name of the exam"],
    },
    acronym: {
        type: String,
    },
    icon: {
        type: String, // Emoji or path to an icon
    },
    description: {
        type: String,
        required: [true, "Please provide a description"],
    },
    sections: {
        type: [String],
        required: [true, "Please list the sections of the exam"],
    },
    scoring: {
        type: String,
        required: [true, "Please describe the scoring mechanism"],
    },
    goodScoreGeneral: {
        type: String,
        required: [true, "Please provide a general good score indication"],
    },
    usedFor: {
        type: [String],
        required: [true, "Please list what the exam is used for"],
    },
    whenToTake: {
        type: String,
        required: [true, "Please provide when the exam is typically taken"],
    },
    registrationLink: {
        type: String,
    },
    knowMoreLink: {
        type: String,
    },
    practiceMaterialLinks: {
        type: [PracticeMaterialSchema],
        default: [],
    }
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

export default mongoose.models.ExamInfo || mongoose.model('ExamInfo', ExamInfoSchema);