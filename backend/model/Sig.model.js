// ongsaaa/sen/ongsaaa-sen-4e4cea7668c1db19ffeb9a5559c07323af263c80/backend/model/Sig.model.js
import mongoose from "mongoose";

export const SigSchema = new mongoose.Schema({
    sigKey: { // To store your original string IDs like 'sig1'
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: [true, "Please provide the SIG name"],
    },
    icon: String, // Can be an emoji or a URL/path
    description: {
        type: String,
        required: [true, "Please provide a description"],
    },
    focusAreas: {
        type: [String],
        default: [],
    },
    coordinator: String,
    joinLink: String,
}, { timestamps: true });

export default mongoose.models.Sig || mongoose.model('Sig', SigSchema);