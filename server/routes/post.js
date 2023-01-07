const express = require("express");
const router = express.Router();
const PostController = require("../controllers/post");

// POST request
router.post("/addPost", PostController.addPost);

// GET request
router.get("/getOnePost", PostController.getOnePost);

// GET request
router.get("/getAllPosts", PostController.getAllPosts);

// PUT request
router.put("/updatePost", PostController.updatePost);

// DELETE request
router.delete("/deletePost", PostController.deletePost);

module.exports = router;
