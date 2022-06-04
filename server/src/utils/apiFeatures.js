class ApiFeatures {
  constructor(queryParams, model, populateKey) {
    this.query = null;
    this.queryParams = queryParams;
    this.advancedFeatures = {};
    this.pagination = {};
    this.model = model;
    this.populateKey = populateKey;
    this.findAdvancedFeatures();
    this.findByQueryConditions();
  }

  findAdvancedFeatures = () => {
    const { select, timestamps, sort, page, limit, ...rest } = this.queryParams;
    this.advancedFeatures = { select, timestamps, sort, page, limit };
    this.queryParams = rest;
    return this;
  };

  findByQueryConditions = () => {
    const queryString = JSON.stringify(this.queryParams).replace(
      /\b(gt|gte|lt|lte|in)\b/g,
      (match) => `$${match}`
    );

    this.query = this.model.find(JSON.parse(queryString));
    return this;
  };

  select = () => {
    const { select, timestamps } = this.advancedFeatures;
    const fields = this.advancedFeatures.select?.replaceAll(',', ' ');

    if (select && timestamps?.toLowerCase() === 'true') {
      this.query = this.query.select(fields);
      this.query = this.query.select('createdAt updatedAt');
    } else if (select) {
      this.query = this.query.select(fields);
    } else if (!select && timestamps?.toLowerCase() === 'false') {
      this.query = this.query.select('-__v -password');
      this.query = this.query.select('-createdAt -updatedAt');
    } else {
      this.query = this.query.select('-__v -password');
    }

    return this;
  };

  sort = () => {
    if (this.advancedFeatures.sort) {
      const sortBy = this.advancedFeatures.sort.replaceAll(',', ' ');
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
    // this.timestamps();
    this.select();
    this.sort();
    await this.paginate(defaultResultsPerPage);
    this.populate();
    return this;
  };

  getQueryData = async () => {
    const data = await this.query;
    console.log(data);
    delete data.__v;
    delete data.password;

    return {
      pagination: this.pagination,
      count: data.length,
      data
    };
  };
}

export default ApiFeatures;
