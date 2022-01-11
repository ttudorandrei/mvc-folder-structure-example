const router = require("express").Router();

const restaurantsRoutes = require("./restaurantRoutes");

router.use("/restaurants", restaurantsRoutes);

module.exports = router;
