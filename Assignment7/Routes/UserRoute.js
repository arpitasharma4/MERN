const express = require("express");
const router = express();
const userController = require("../controllers/UserControllers");

router.post("/user/signup", userController.signup);

router.post("/user/login", userController.login);

router.get("/user/:id", userController.getUserById);

router.post("/blog", userController.postBlog);

router.get("/blog", userController.getBlog);

module.exports = router;