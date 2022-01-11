const router = require("express").Router();

const privateRoutes = require("./privateRoutes");
const publicRoutes = require("./publicRoutes");
const { auth } = require("../../middleware/auth");

router.use(publicRoutes);
router.use(auth, privateRoutes);

module.exports = router;
