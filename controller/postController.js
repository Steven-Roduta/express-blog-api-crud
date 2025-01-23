const data = require('../data/data')

// index
const index = (req, res )=>  {
    res.json(data)
};

// show
const show = (req, res) => {
    const id = Number (req.params.id)

    const post = data.find((post) => post.id === id)  

    res.json(post)
};

// destroy
const destroy = (req, res) => {
    const id = Number (req.params.id);

    const post = data.findIndex((post) => post.id === id);
    data.splice(post, 1);

    res.status(204);
};


module.exports = {
    index,
    show,
    destroy
}

