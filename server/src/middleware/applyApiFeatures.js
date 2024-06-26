import asyncHandler from 'express-async-handler';
import ApiFeatures from '../utils/apiFeatures.js';

const applyApiFeatures = (model, populateKey, defaultResultsPerPage = 25, timestamps = true) => (
  asyncHandler(async (req, res, next) => {
    const apiFeatures = new ApiFeatures(req.query, model, populateKey, timestamps);
    await apiFeatures.applyAllAdvancedFeatures(defaultResultsPerPage);
    res.apiFeatures = await apiFeatures.getQueryData();
    next();
  })
);

export default applyApiFeatures;
