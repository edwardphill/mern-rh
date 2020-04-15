const Herd = require("../models/herd-model");

createHerd = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a herd",
    });
  }

  const herd = new herd(body);

  if (!herd) {
    return res.status(400).json({ success: false, error: err });
  }

  herd
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: herd._id,
        message: "Herd created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Herd not created!",
      });
    });
};

updateHerd = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Herd.findOne({ _id: req.params.id }, (err, herd) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Herd not found!",
      });
    }
    herd.cattle = body.cattle;
    herd.male = body.male;
    herd.female = body.female;
    herd
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: herd._id,
          message: "Herd updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Herd not updated!",
        });
      });
  });
};

deleteHerd = async (req, res) => {
  await Movie.findOneAndDelete({ _id: req.params.id }, (err, herd) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!herd) {
      return res.status(404).json({ success: false, error: `Herd not found` });
    }

    return res.status(200).json({ success: true, data: herd });
  }).catch((err) => console.log(err));
};

getHerdById = async (req, res) => {
  await Herd.findOne({ _id: req.params.id }, (err, herd) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!herd) {
      return res.status(404).json({ success: false, error: `Herd not found` });
    }
    return res.status(200).json({ success: true, data: herd });
  }).catch((err) => console.log(err));
};

getHerds = async (req, res) => {
  await Herd.find({}, (err, herds) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!herds.length) {
      return res.status(404).json({ success: false, error: `Herd not found` });
    }
    return res.status(200).json({ success: true, data: herds });
  }).catch((err) => console.log(err));
};

module.exports = {
  createHerd,
  updateHerd,
  deleteHerd,
  getHerds,
  getHerdById,
};
