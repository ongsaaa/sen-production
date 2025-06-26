import mongoose from "mongoose";

const MajorPlayerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: String,
    url: String,
}, { _id: false });

const ResourceLinkSchema = new mongoose.Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
}, { _id: false });

export const CareerPathwaySchema = new mongoose.Schema({
    pathwayKey: { // To store a unique key like 'ethical-hacker'
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: [true, "Please provide the career pathway title"],
    },
    icon: String,
    description: {
        type: String,
        required: [true, "Please provide a description"],
    },
    typicalEducationalPathways: {
        type: [String],
        default: [],
    },
    lessonsAndTopics: {
        type: [String],
        default: [],
    },
    keySkills: {
        type: [String],
        default: [],
    },
    relevantToolsAndTechnologies: {
        type: [String],
        default: [],
    },
    stepsToEnterField: {
        type: [String],
        default: [],
    },
    relevantUniversityMajors: {
        type: [String],
        default: [],
    },
    futureOutlook: String,
    majorPlayersInIndustry: {
        type: [MajorPlayerSchema],
        default: [],
    },
    resourceLinks: {
        type: [ResourceLinkSchema],
        default: [],
    },
}, { timestamps: true });

export default mongoose.models.CareerPathway || mongoose.model('CareerPathway', CareerPathwaySchema);