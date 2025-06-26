import { Router } from "express";
const router = Router();

import * as controller from '../controllers/appController.js';

// Item (Opportunity) Routes
router.route('/createitem').post(controller.createItem);
router.route('/getitem').get(controller.getItem);
router.route('/getitem/:id').get(controller.getSingleItem);
router.route('/updateitem/:id').put(controller.updateItem);

// StudyTool Routes
router.route('/studytools')
    .post(controller.createStudyTool)
    .get(controller.getStudyTools);

// ExamInfo Routes
router.route('/examsinfo')
    .post(controller.createExamInfo)
    .get(controller.getExamInfos);

// UniPathway Routes
router.route('/unipathways')
    .post(controller.createUniPathway)
    .get(controller.getUniPathways);

// SIGs Routes
router.route('/sigs')
    .post(controller.createSig)
    .get(controller.getSigs);

// Partner Routes
router.route('/partners')
    .post(controller.createPartner)
    .get(controller.getPartners);

// CareerPathway Routes
router.route('/careerpathways')
    .post(controller.createCareerPathway)
    .get(controller.getCareerPathways);

export default router;