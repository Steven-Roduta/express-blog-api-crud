const data = require("../data/data");

// index
const index = (req, res) => {
  res.json(data);
};

// show
const show = (req, res) => {
  const id = Number(req.params.id);
  const post = data.find((post) => post.id === id);

  if (!post) {
    return res.sendStatus(404); // Risorsa non trovata
  }
  res.json(post);
};

// destroy
const destroy = (req, res) => {
  const { id } = req.params;
  const postIndex = data.findIndex((post) => post.id === Number(id));

  if (postIndex < 0) {
    return res.sendStatus(404); // Risorsa non trovata
  }

  data.splice(postIndex, 1);
  res.sendStatus(204); // Risorsa eliminata con successo
};

// store
const store = (req, res) => {
  if (!req.body.name || !req.body.image || !req.body.tag) {
    return res.status(400).json({ error: "Dati mancanti nel corpo della richiesta" });
  }

  const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
  const newPost = {
    id: newId,
    name: req.body.name,
    image: req.body.image,
    tag: req.body.tag,
  };

  data.push(newPost);
  res.status(201).json(newPost);
};

module.exports = {
  index,
  show,
  destroy,
  store,
};
