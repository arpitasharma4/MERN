const express = require("express");
const router = express();
const adminController = require("../controllers/AdminControllers");

router.post("/admin/signup", adminController.signup);

router.post("/admin/login", adminController.login);

module.exports = router;