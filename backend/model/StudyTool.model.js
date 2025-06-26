// ongsaaa/sen/ongsaaa-sen-4e4cea7668c1db19ffeb9a5559c07323af263c80/backend/model/StudyTool.model.js
import mongoose from "mongoose";

export const StudyToolSchema = new mongoose.Schema({
    toolKey: { // To store your original string IDs like 'tool1'
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: [true, "Please provide the name of the study tool"],
    },
    description: {
        type: String,
        required: [true, "Please provide a description"],
    },
    category: {
        type: String,
        required: [true, "Please provide a category"],
    },
    link: {
        type: String,
        required: [true, "Please provide a link to the tool"],
    },
    icon: {
        type: String, // URL to an image/SVG or an emoji
    },
    tags: {
        type: [String],
    }
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

// Ensure the model is not re-defined if it already exists (important for hot-reloading environments)
export default mongoose.models.StudyTool || mongoose.model('StudyTool', StudyToolSchema);