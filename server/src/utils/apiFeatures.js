class ApiFeatures {
  constructor(queryParams, model, populateKey, timestamps = true) {
    this.query = null;
    this.queryParams = queryParams;
    this.advancedFeatures = {};
    this.pagination = {};
    this.model = model;
    this.populateKey = populateKey;
    this.findAdvancedFeatures();
    this.findByQueryConditions(timestamps);
  }

  findAdvancedFeatures = () => {
    const { select, sort, page, limit, ...rest } = this.queryParams;
    this.advancedFeatures = { select, sort, page, limit };
    this.queryParams = rest;
    return this;
  };

  findByQueryConditions = (timestamps = true) => {
    const queryString = JSON.stringify(this.queryParams).replace(
      /\b(gt|gte|lt|lte|in)\b/g,
      (match) => `$${match}`
    );

    this.query = this.model.find(JSON.parse(queryString));
    this.query = this.query.getData ? this.query.getData(timestamps) : this.query;
    return this;
  };

  select = () => {
    if (this.advancedFeatures.select) {
      const fields = this.advancedFeatures.select.replace(',', ' ');
      this.query = this.query.select(fields);
    }

    return this;
  };

  sort = () => {
    if (this.advancedFeatures.sort) {
      const sortBy = this.advancedFeatures.sort.replace(',', ' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  };

  paginate = async (defaultResultsPerPage = 25) => {
    const page = parseInt(this.advancedFeatures.page, 10) || 1;
    const limit = parseInt(this.advancedFeatures.limit, 10) || defaultResultsPerPage;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await this.model.countDocuments();

    this.query = this.query.skip(startIndex).limit(limit);
    this.pagination = {
      limit,
      page: {
        prev: startIndex > 0 ? page - 1 : null,
        current: page,
        next: endIndex < total ? page + 1 : null
      }
    };

    return this;
  };

  populate = () => {
    if (this.populateKey) {
      this.query = this.query.populate(this.populateKey);
    }

    return this;
  };

  applyAllAdvancedFeatures = async (defaultResultsPerPage = 25) => {
    this.select();
    this.sort();
    await this.paginate(defaultResultsPerPage);
    this.populate();
    return this;
  };

  getQueryData = async () => {
    const data = await this.query;

    return {
      pagination: this.pagination,
      count: data.length,
      data
    };
  };
}

export default ApiFeatures;
