const validation = (req, res, next) => {
  req.params.id = Number(req.params.id);

  if (isNaN(req.params.id)) {
    return res.status(400).json({ error: "L'ID deve essere un numero valido." });
  }

  next();
};

module.exports = validation;
