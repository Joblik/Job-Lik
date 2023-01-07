const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

router.get("/getAllUsers", userController.getAllUsers);
router.get("/getOneUser/:id", userController.getOneUser);
router.post("/addUser", userController.addUser);
router.put("/updateUser/:id", userController.updateUser);
router.delete("/deleteUser/:id", userController.deleteUser);

module.exports = router;