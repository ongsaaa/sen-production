// ongsaaa/sen/ongsaaa-sen-4e4cea7668c1db19ffeb9a5559c07323af263c80/backend/model/UniPathway.model.js
import mongoose from "mongoose";

const UniversityTierSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    exampleSAT: String,
    exampleACT: String,
    exampleIB: String,
    exampleAP: String,
    exampleIELTS: String,
    exampleTOEFL: String,
}, { _id: false });

const StandardizedTestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    details: { type: String, required: true },
    typicalScoreRange: String,
}, { _id: false });

const UsefulLinkSchema = new mongoose.Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
}, { _id: false });

export const UniPathwaySchema = new mongoose.Schema({
    pathwayKey: { // To store your original string IDs like 'usa', 'uk'
        type: String,
        required: [true, "Please provide a unique key for the pathway"],
        unique: true,
    },
    countryName: {
        type: String,
        required: [true, "Please provide the country name"],
    },
    flagIcon: String,
    generalTips: {
        type: [String],
        default: [],
    },
    standardizedTests: {
        type: [StandardizedTestSchema],
        default: [],
    },
    universityTiers: {
        type: [UniversityTierSchema],
        default: [],
    },
    keyConsiderations: {
        type: [String],
        default: [],
    },
    usefulLinks: {
        type: [UsefulLinkSchema],
        default: [],
    }
}, { timestamps: true });

export default mongoose.models.UniPathway || mongoose.model('UniPathway', UniPathwaySchema);