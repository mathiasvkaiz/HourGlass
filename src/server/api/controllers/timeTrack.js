const httpStatus = require('http-status');
const APIError = require('../utils/APIError');
const TimeTrack = require('../models/TimeTrack.js');
const { handler: errorHandler } = require('../middlewares/error');

/**
 * Load timeTrack object and append to req.
 * @public
 */
exports.load = async (req, res, next, id) => {
  try {
    const timeTrack = await TimeTrack.get(id);
    req.locals = { timeTrack };
    return next();
  } catch (error) {
    return errorHandler(error, req, res);
  }
};

/**
 * Get user
 * @public
 */
exports.get = (req, res) => res.json(req.locals.timeTrack.transform());

/**
 * Create new timeTrack
 * @public
 */
exports.create = async (req, res, next) => {
  const reqBody = Object.assign(req.body, { userId: req.params.userId });
  const timeTrack = new TimeTrack(reqBody);
  const savedTimeTrack = await timeTrack.save();
  res.status(httpStatus.CREATED);
  res.json(savedTimeTrack.transform());
};

/**
 * Update existing user
 * @public
 */
exports.update = (req, res, next) => {
  const newTimeTrack = Object.assign(req.locals.timeTrack, req.body, {
    userId: req.params.userId,
  });

  newTimeTrack
    .save()
    .then(saveTimeTrack => res.json(saveTimeTrack.transform()));
};

/**
 * Get timeTrack list a user
 * @public
 */
exports.list = async (req, res, next) => {
  /* Fetch timeTrack list and total timeTrack count for a particular user to add hasNext and hasPrev flags */
  try {
    const [timeTracklist, count] = await TimeTrack.list(
      Object.assign(req.query, { userId: req.params.userId })
    );

    const transformedTimeTracks = timeTracklist.map(timeTrack =>
      timeTrack.transform()
    );
    const hasNext = (req.query.page || 1) < count;
    const hasPrev = (req.query.page || 1) > 1;
    res.json({ timeTracks: transformedTimeTracks, hasNext, hasPrev });
  } catch (error) {
    next(error);
  }
};

/**
 * Get filtered timeTrack list between a date range for a user
 * @public
 */
exports.filterByDate = async (req, res, next) => {
  /* Fetch timeTrack list and total timeTrack count for a particular user between a date range to add
    hasNext and hasPrev flags
  */
  try {
    const [filteredTimeTracks, count] = await TimeTrack.filterByDate(
      Object.assign(req.query, { userId: req.params.userId })
    );

    const transformedTimeTracks = filteredTimeTracks.map(timeTrack =>
      timeTrack.transform()
    );
    const hasNext = (req.query.page || 1) < count;
    const hasPrev = (req.query.page || 1) > 1;
    res.json({ timeTracks: transformedTimeTracks, hasNext, hasPrev });
  } catch (error) {
    next(error);
  }
};

/**
 * Search time tracks for a particular user using query string.
 * @public
 */
exports.search = async (req, res, next) => {
  /* Fetch timeTrack list using search query for a particular user and total
    user count to add hasNext and hasPrev flags
  */
  try {
    const [searchResult, count] = await TimeTrack.search(
      Object.assign(req.query, { userId: req.params.userId })
    );
    const transformedTimeTracks = searchResult.map(timeTrack =>
      timeTrack.transform()
    );

    const hasNext = (req.query.page || 1) < count;
    const hasPrev = (req.query.page || 1) > 1;
    res.json({ timeTracks: transformedTimeTracks, hasNext, hasPrev });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete user
 * @public
 */
exports.remove = (req, res, next) => {
  const { timeTrack } = req.locals;

  timeTrack
    .remove()
    .then(() => res.status(httpStatus.NO_CONTENT).end())
    .catch(e => next(e));
};