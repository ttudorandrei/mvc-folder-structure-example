const router = require("express").Router();

router.get("/dashboard", async (req, res) => {
  try {
    const restaurants = [
      { restaurantName: "Bob & Thoms" },
      { restaurantName: "Portofino" },
      { restaurantName: "Schnitzelei" },
    ];

    res.render("dashboard", { restaurants });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Could not render dashboard!" });
  }
});

module.exports = router;
