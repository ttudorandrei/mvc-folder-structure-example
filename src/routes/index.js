const router = require("express").Router();

const apiRoutes = require("./api");
const auth = require("../middleware/auth");

router.use("/api", auth, apiRoutes);

module.exports = router;
