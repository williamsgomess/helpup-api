module.exports = app => {
  const Calls = app.db.models.Calls;

  app
    .route("/calls")
    .get((req, res) => {
      Calls.findAll({})
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })
    .post((req, res) => {
      Calls.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    });

  app
    .route("/calls/:id")
    .get((req, res) => {
      Calls.findOne({ where: req.params })
        .then(result => {
          if (result) {
            res.json(result);
          } else {
            res.sendStatus(404);
          }
        })
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })
    .delete((req, res) => {
      Calls.destroy({ where: req.params })
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    });
};
