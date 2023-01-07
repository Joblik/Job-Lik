const db = require("../models")

// Getting All Posts
const getAllPosts = (req, res) => {
  db.Post.findAll()
    .then((posts) => res.status(200).send(posts))
    .catch((err) => res.status(400).send(err));
};

// Getting One Post
const getOnePost = (req, res) => {
  Post.findByPk(req.params.id)
    .then((post) => res.status(200).send(post))
    .catch((err) => res.status(400).send(err));
};

// Creating Post
const addPost = (req, res) => {
  Post.create(req.body)
    .then((post) => res.status(200).send(post))
    .catch((err) => res.status(400).send(err));
};

// Updating Post
const updatePost = (req, res) => {
  Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((post) => res.status(200).send(post))
    .catch((err) => res.status(400).send(err));
};

// Deleting Post
const deletePost = (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(400).send(err));
};
module.exports = {
  updatePost,
  getAllPosts,
  addPost,
  deletePost,
  getOnePost,
};