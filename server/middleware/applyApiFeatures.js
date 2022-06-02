import asyncHandler from 'express-async-handler';

const findAdvancedFeatures = (req) => {
  const { select, sort, page, limit, ...rest } = req.query;
  req.advancedFeatures = { select, sort, page, limit };
  req.query = rest;
};

const findByQueryConditions = (req, model) => {
  const queryString = JSON.stringify(req.query).replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );

  req.mongoQuery = model.find(JSON.parse(queryString));
};

const select = (req) => {
  if (req.advancedFeatures.select) {
    const fields = req.advancedFeatures.select.replace(',', ' ');
    req.mongoQuery = req.mongoQuery.select(fields);
  }
};

const sort = (req) => {
  if (req.advancedFeatures.sort) {
    const sortBy = req.advancedFeatures.sort.replace(',', ' ');
    req.mongoQuery = req.mongoQuery.sort(sortBy);
  } else {
    req.mongoQuery = req.mongoQuery.sort('-createdAt');
  }
};

const paginate = async (req, model, defaultResultsPerPage = 25) => {
  const page = parseInt(req.advancedFeatures.page, 10) || 1;
  const limit = parseInt(req.advancedFeatures.limit, 10) || defaultResultsPerPage;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await model.countDocuments();

  req.mongoQuery = req.mongoQuery.skip(startIndex).limit(limit);

  return {
    limit,
    page: {
      prev: startIndex > 0 ? page - 1 : null,
      current: page,
      next: endIndex < total ? page + 1 : null
    }
  };
};

const populate = (req, populateKey) => {
  if (populateKey) {
    req.mongoQuery = req.mongoQuery.populate(populateKey);
  }
};

const applyApiFeatures = (model, populateKey, defaultResultsPerPage = 25) => (
  asyncHandler(async (req, res, next) => {
    findAdvancedFeatures(req);
    findByQueryConditions(req, model);
    select(req);
    sort(req);
    const pagination = await paginate(req, model, defaultResultsPerPage);
    populate(req, populateKey);
    const data = await req.mongoQuery;

    res.apiFeatures = {
      pagination,
      count: data.length,
      data
    };

    next();
  })
);

export default applyApiFeatures;
