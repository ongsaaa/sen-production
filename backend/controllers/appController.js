import ItemModel from "../model/Item.model.js";
import StudyToolModel from "../model/StudyTool.model.js";
import ExamInfoModel from "../model/ExamInfo.model.js";
import UniPathwayModel from "../model/UniPathway.model.js";
import SigModel from "../model/Sig.model.js";
import PartnerModel from "../model/Partner.model.js";
import CareerPathwayModel from "../model/CareerPathway.model.js";
import axios from "axios";
import * as cheerio from "cheerio"; 
import getScrapedData from "metadata-scraper";

export async function createItem(req, res) {
    try {
        const { type, name, industry, description, imageUrl, link, status, opening, deadline, organization, post_date } = req.body;
        if (!type || !description || !status || !post_date) {
            return res.status(400).send({ error: "Missing required fields" });
        }
        if (imageUrl) new URL(imageUrl);
        const item = new ItemModel({ type, name, industry, description, imageUrl, link, status, opening, deadline, organization, post_date });
        const savedItem = await item.save();
        return res.status(201).send({ msg: "Item Created Successfully", item: savedItem });
    } catch (error) {
        if (error.name === 'ValidationError') return res.status(400).send({ error: "Validation Failed", details: error.errors });
        return res.status(500).send({ error: "Internal Server Error", message: error.message });
    }
}

export async function getSingleItem(req, res) {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).send({ error: "Item ID is required" });
        const item = await ItemModel.findById(id);
        if (!item) return res.status(404).send({ error: "Item not found" });
        return res.status(200).send(item);
    } catch (error) {
        if (error.name === 'CastError') return res.status(400).send({ error: "Invalid Item ID format" });
        return res.status(500).send({ error: "Internal Server Error", message: error.message });
    }
}

export async function updateItem(req, res) {
    try {
        const { id } = req.params;
        const body = req.body;
        if (!id) return res.status(400).send({ error: "Item ID is required" });
        if (Object.keys(body).length === 0) return res.status(400).send({ error: "Request body cannot be empty" });
        const updatedItem = await ItemModel.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        if (!updatedItem) return res.status(404).send({ error: "Item not found" });
        return res.status(200).send({ msg: "Item Updated Successfully", item: updatedItem });
    } catch (error) {
        if (error.name === 'ValidationError') return res.status(400).send({ error: "Validation Failed", details: error.errors });
        if (error.name === 'CastError') return res.status(400).send({ error: "Invalid Item ID format" });
        return res.status(500).send({ error: "Internal Server Error", message: error.message });
    }
}

export async function getItem(req, res) {
    try {
        const { type, name, industry, status, organization, post_date } = req.query;
        let query = {};
        if (type) query.type = type;
        if (name) query.name = { $regex: name, $options: 'i' };
        if (industry) query.industry = { $in: Array.isArray(industry) ? industry : industry.split(',') };
        if (status) query.status = status;
        if (organization) query.organization = { $regex: organization, $options: 'i' };
        if (post_date) query.post_date = post_date;
        const items = await ItemModel.find(query);
        return res.status(200).send(items);
    } catch (error) {
        return res.status(500).send({ error: "Internal Server Error", message: error.message });
    }
}

export async function createStudyTool(req, res) {
    try {
        const newStudyTool = new StudyToolModel(req.body);
        await newStudyTool.save();
        return res.status(201).send({ msg: "Study Tool Created" });
    } catch (error) {
        if (error.code === 11000) return res.status(409).send({ error: `Key already exists.` });
        return res.status(500).send({ error: "Internal Server Error" });
    }
}

export async function getStudyTools(req, res) {
    try {
        const studyTools = await StudyToolModel.find({});
        const transformed = studyTools.map(t => { const { _id, toolKey, ...r } = t.toObject(); return { id: toolKey || _id.toString(), ...r }; });
        return res.status(200).send(transformed);
    } catch (error) {
        return res.status(500).send({ error: "Internal Server Error" });
    }
}

export async function createExamInfo(req, res) {
    try {
        const newExamInfo = new ExamInfoModel(req.body);
        await newExamInfo.save();
        return res.status(201).send({ msg: "Exam Info Created" });
    } catch (error) {
        if (error.code === 11000) return res.status(409).send({ error: `Key already exists.` });
        return res.status(500).send({ error: "Internal Server Error" });
    }
}

export async function getExamInfos(req, res) {
    try {
        const exams = await ExamInfoModel.find({});
        const transformed = exams.map(e => { const { _id, examKey, ...r } = e.toObject(); return { id: examKey || _id.toString(), ...r }; });
        return res.status(200).send(transformed);
    } catch (error) {
        return res.status(500).send({ error: "Internal Server Error" });
    }
}

export async function createUniPathway(req, res) {
    try {
        const newPathway = new UniPathwayModel(req.body);
        await newPathway.save();
        return res.status(201).send({ msg: "University Pathway Created" });
    } catch (error) {
        if (error.code === 11000) return res.status(409).send({ error: `Key already exists.` });
        return res.status(500).send({ error: "Internal Server Error" });
    }
}

export async function getUniPathways(req, res) {
    try {
        const pathways = await UniPathwayModel.find({});
        const transformed = pathways.map(p => { const { _id, pathwayKey, ...r } = p.toObject(); return { id: pathwayKey || _id.toString(), ...r }; });
        return res.status(200).send(transformed);
    } catch (error) {
        return res.status(500).send({ error: "Internal Server Error" });
    }
}

export async function createSig(req, res) {
    try {
        const newSig = new SigModel(req.body);
        await newSig.save();
        return res.status(201).send({ msg: "SIG Created" });
    } catch (error) {
        if (error.code === 11000) return res.status(409).send({ error: `Key already exists.` });
        return res.status(500).send({ error: "Internal Server Error" });
    }
}

export async function getSigs(req, res) {
    try {
        const sigs = await SigModel.find({});
        const transformed = sigs.map(s => { const { _id, sigKey, ...r } = s.toObject(); return { id: sigKey || _id.toString(), ...r }; });
        return res.status(200).send(transformed);
    } catch (error) {
        return res.status(500).send({ error: "Internal Server Error" });
    }
}

export async function createPartner(req, res) {
    try {
        const newPartner = new PartnerModel(req.body);
        await newPartner.save();
        return res.status(201).send({ msg: "Partner Created" });
    } catch (error) {
        if (error.code === 11000) return res.status(409).send({ error: `Key already exists.` });
        return res.status(500).send({ error: "Internal Server Error" });
    }
}

export async function getPartners(req, res) {
    try {
        const partners = await PartnerModel.find({});
        const transformed = partners.map(p => { const { _id, partnerKey, ...r } = p.toObject(); return { id: partnerKey || _id.toString(), ...r }; });
        return res.status(200).send(transformed);
    } catch (error) {
        return res.status(500).send({ error: "Internal Server Error" });
    }
}

export async function createCareerPathway(req, res) {
    try {
        const newPathway = new CareerPathwayModel(req.body);
        await newPathway.save();
        return res.status(201).send({ msg: "Career Pathway Created" });
    } catch (error) {
        if (error.code === 11000) return res.status(409).send({ error: `Key already exists.` });
        return res.status(500).send({ error: "Internal Server Error" });
    }
}

export async function getCareerPathways(req, res) {
    try {
        const pathways = await CareerPathwayModel.find({});
        const transformed = pathways.map(p => { const { _id, pathwayKey, ...r } = p.toObject(); return { id: pathwayKey || _id.toString(), ...r }; });
        return res.status(200).send(transformed);
    } catch (error) {
        return res.status(500).send({ error: "Internal Server Error" });
    }
}

export async function webscrapeUrl(req, res) {
    const { url } = req.body;
    if (!url) {
        return res.status(400).send({ error: "URL is required" });
    }

    try {
        const metadata = await getScrapedData(url);
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const bodyText = $('body').text().replace(/\s\s+/g, ' ');

        const getInfo = (keywords) => {
            for (const keyword of keywords) {
                const regex = new RegExp(`(?:${keyword})[:\\s]*([^\\n\\.\\,]{5,100})`, "i");
                const match = bodyText.match(regex);
                if (match && match[1]) {
                    return match[1].trim();
                }
            }
            return '';
        };
        
        const description = (metadata.description || 'No description found.').substring(0, 1200);

        const scrapedData = {
            name: metadata.title || $('title').text(),
            description: description.split(' ').slice(0, 300).join(' '),
            imageUrl: metadata.image,
            link: metadata.url || url,
            organization: metadata.provider || $('meta[property="og:site_name"]').attr('content'),
            ageRestriction: getInfo(['age restriction', 'ages']),
            location: getInfo(['location', 'venue']),
            schedule: getInfo(['schedule', 'dates', 'time']),
            fee: getInfo(['fee', 'cost', 'price']),
            opening: getInfo(['opening date', 'starts on', 'applications open']),
            deadline: getInfo(['deadline', 'closes on', 'apply by']),
        };

        return res.status(200).send(scrapedData);

    } catch (error) {
        return res.status(500).send({ error: "Failed to scrape the URL.", message: error.message });
    }
}