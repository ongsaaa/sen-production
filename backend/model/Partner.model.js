// ongsaaa/sen/ongsaaa-sen-4e4cea7668c1db19ffeb9a5559c07323af263c80/backend/model/Partner.model.js
import mongoose from "mongoose";

// Optional: Define allowed partner types if you want to enforce them at the schema level
// const allowedPartnerTypes = ['Supporter', 'Collaborator', 'Sponsor', 'Technology Provider', 'Community Partner'];

export const PartnerSchema = new mongoose.Schema({
    partnerKey: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: [true, "Please provide the partner's name"],
    },
    logoUrl: {
        type: String,
        required: [true, "Please provide the URL for the partner's logo"],
    },
    websiteUrl: String,
    description: String,
    partnerType: { // New field for categorization
        type: String,
        required: [true, "Please specify the partner type"],
        // validate: { // Optional: Uncomment to enforce allowed types
        //     validator: function(v) {
        //         return allowedPartnerTypes.includes(v);
        //     },
        //     message: props => `${props.value} is not a valid partner type!`
        // },
        default: 'General Partner' // Default type if not specified
    }
}, { timestamps: true });

export default mongoose.models.Partner || mongoose.model('Partner', PartnerSchema);