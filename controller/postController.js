const data = require('../data/data')

// index
const index = (req, res )=>  {
    res.json(data)
};

module.exports = {
    index
}