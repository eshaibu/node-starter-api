/**
 * Class Test
 */
export default class Test {
  /**
   * @param {Object} req - request parameter
   * @param {Object} res - The response object
   * @param {object} next - The callback to the next program handler
   * @param {String} id - The id from the url parameter
   * @return {Object} res
   */
  static async id(req, res, next, id) {
    req.paramId = id;
    next();
  }

  /**
   * Create test
   * @param {object} req - request parameter
   * @param {object} res - response parameter
   * @returns {object} - response detail
   */
  static async create(req, res) {
    return res
      .status(201)
      .json({ message: 'POST HTTP method on test resource' });
  }

  /**
   * Get all
   * @param {object} req - request parameter
   * @param {object} res - response parameter
   * @returns {object} - response detail
   */
  static async list(req, res) {
    return res.json({
      message: 'GET HTTP method on test resource'
    });
  }

  /**
   * Get one resource
   * @param {object} req - request parameter
   * @param {object} res - response parameter
   * @returns {object} - response detail
   */
  static async get(req, res) {
    return res.json({
      message: `GET HTTP method on test/${req.paramId} resource`
    });
  }

  /**
   * Update one resource
   * @param {object} req - request parameter
   * @param {object} res - response parameter
   * @returns {object} - response detail
   */
  static async update(req, res) {
    return res.json({
      message: `PATCH HTTP method on test/${req.paramId} resource`
    });
  }

  /**
   * Delete one resource
   * @param {object} req - request parameter
   * @param {object} res - response parameter
   * @returns {object} - response detail
   */
  static async remove(req, res) {
    return res.json({
      message: `DELETE HTTP method on test/${req.paramId} resource`
    });
  }
}
