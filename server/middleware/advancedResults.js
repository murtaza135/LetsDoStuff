const advancedResults = (model, populate) => async (req, res, next) => {
  const reqQuery = { ...req.query };

  // Fields to exclude from reqQuery
  const removeFields = ['select', 'sort', 'page', 'limit'];
  removeFields.forEach((param) => delete reqQuery[param]);

  // Beginning of query
  let query;

  // Query params for filtering
  let queryString = JSON.stringify(reqQuery);
  queryString = queryString.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );
  query = model.find(JSON.parse(queryString));

  // apply selection of specific attributes
  if (req.query.select) {
    const fields = req.query.select.replace(',', ' ');
    query = query.select(fields);
  }

  // apply sort
  if (req.query.sort) {
    const sortBy = req.query.sort.replace(',', ' ');
    query = query.sort(sortBy);
  } else {
    // default sort
    query = query.sort('-createdAt');
  }

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 25;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await model.countDocuments();
  query = query.skip(startIndex).limit(limit);

  // Populate
  if (populate) {
    query = query.populate(populate);
  }

  // Execute query
  const results = await query;

  // Pagination result
  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit
    };
  }

  res.advancedResults = {
    success: true,
    pagination,
    count: results.length,
    data: results
  };

  next();
};

export default advancedResults;
