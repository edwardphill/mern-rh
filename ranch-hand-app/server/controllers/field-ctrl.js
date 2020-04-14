// will need users, fields, and herd, start with fields

const Field = require("../models/field-model");

createField = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a field",
    });
  }

  const field = new Field(body);

  if (!field) {
    return res.status(400).json({ success: false, error: err });
  }

  field
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: field._id,
        message: "field created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "field not created!",
      });
    });
};

updateField = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Field.findOne({ _id: req.params.id }, (err, field) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Field not found!",
      });
    }
    field.fence = body.fence;
    field.draggedDate = body.draggedDate;
    field.daysGrazed = body.daysGrazed;
    field.acreage = body.acreage;
    field.lyme = body.lyme;
    field.fertilized = body.fertilized;
    field
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: field._id,
          message: "Field updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Field not updated!",
        });
      });
  });
};

deleteField = async (req, res) => {
  await Field.findOneAndDelete({ _id: req.params.id }, (err, field) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!field) {
      return res.status(404).json({ success: false, error: `Field not found` });
    }

    return res.status(200).json({ success: true, data: field });
  }).catch((err) => console.log(err));
};

getFieldById = async (req, res) => {
  await Field.findOne({ _id: req.params.id }, (err, field) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!field) {
      return res.status(404).json({ success: false, error: `field not found` });
    }
    return res.status(200).json({ success: true, data: field });
  }).catch((err) => console.log(err));
};

getFields = async (req, res) => {
  await Field.find({}, (err, fields) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!fields.length) {
      return res.status(404).json({ success: false, error: `Field not found` });
    }
    return res.status(200).json({ success: true, data: fields });
  }).catch((err) => console.log(err));
};

module.exports = {
  createField,
  updateField,
  deleteField,
  getFields,
  getFieldById,
};
