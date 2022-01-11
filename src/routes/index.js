const router = require("express").Router();

const apiRoutes = require("./api");
const htmlRoutes = require("./html");
const { auth } = require("../middleware/auth");

router.use("/api", auth, apiRoutes);
router.use("/", htmlRoutes);

module.exports = router;
