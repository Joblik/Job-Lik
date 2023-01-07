const db = require("../models")


// Create a new user
const addUser = (req, res) => {
    db.User.create(req.body)
      .then((post) => res.status(200).send(post))
      .catch((err) => res.status(400).send(err));
  };

// Get all users
const getAllUsers = (req, res) => {
    db.User.findAll()
      .then((posts) => res.status(200).send(posts))
      .catch((err) => res.status(400).send(err));
  };

// Get a specific user
const getOneUser = (req, res) => {
    db.User.findByPk(req.params.id)
      .then((post) => res.status(200).send(post))
      .catch((err) => res.status(400).send(err));
  };

// Update a specific user
const updateUser = (req, res) => {
    db.User.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((post) => res.status(200).send(post))
      .catch((err) => res.status(400).send(err));
  };

// Delete a specific user
const deleteUser = (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(400).send(err));
  };

  module.exports = {
    updateUser,
    getAllUsers,
    addUser,
    deleteUser,
    getOneUser,
  };