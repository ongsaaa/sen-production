import mongoose from "mongoose";

const allowedTypes = ['workshops', 'lectures', 'skill development', 'shadowing', "internships", "externships", "competitions", "networking", "community projects"];
const allowedStatus = ['open', 'closed'];

function isValidDate(value) {
    if (!value) return true; // Allow empty dates
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    if (!regex.test(value)) {
        return false;
    }
    const [day, month, year] = value.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

export const ItemSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, "Please provide correct Item Type"],
        validate: {
            validator: function (value) {
                return allowedTypes.includes(value.toLowerCase());
            },
            message: 'Please provide a valid Item Type'
        },
    },
    name: {
        type: String,
    },
    industry: {
        type: [String],
    },
    description: {
        type: String,
        required: [true, "Please provide a description for the item"]
    },
    imageUrl: { 
        type: String,
        default: ''
    },
    link: {
        type: String,
    },
    status: {
        type: String,
        required: [true, "Please provide a status for the item"],
        validate: {
            validator: function (value) {
                return allowedStatus.includes(value.toLowerCase());
            },
            message: 'open or closed'
        },
    },
    opening: {
        type: String,
        validate: {
            validator: isValidDate,
            message: 'Please provide a valid date in the format dd-mm-yyyy'
        }
    },
    deadline: {
        type: String,
        validate: {
            validator: isValidDate,
            message: 'Please provide a valid date in the format dd-mm-yyyy'
        }
    },
    organization: {
        type: String,
    },
    post_date: {
        type: String,
        required: [true, "Please provide a postdate for the item"],
        validate: {
            validator: isValidDate,
            message: 'Please provide a valid date in the format dd-mm-yyyy'
        }
    },
    ageRestriction: {
        type: String,
    },
    location: {
        type: String,
    },
    schedule: {
        type: String,
    },
    fee: {
        type: String,
    },
    additionalInfo: {
        type: String,
    },
    // Add the new field for certificates
    providesCertificate: {
        type: Boolean,
        default: false,
    }
});

export default mongoose.model.Item || mongoose.model('Item', ItemSchema);