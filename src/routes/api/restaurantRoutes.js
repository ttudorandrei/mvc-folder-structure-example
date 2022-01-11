const router = require("express").Router();

router.get("/", async (req, res) => {
  const restaurants = [
    { restaurantName: "Bob & Thoms" },
    { restaurantName: "Portofino" },
    { restaurantName: "Schnitzelei" },
  ];

  try {
    return res.status(200).json(restaurants);
  } catch (error) {
    return res.status(500).json({ error: "Failed to get restaurants" });
  }
});

module.exports = router;
