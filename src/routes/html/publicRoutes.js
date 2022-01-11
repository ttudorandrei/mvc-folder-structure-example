const router = require("express").Router();
const { isLoggedIn } = require("../../middleware/auth");

router.get("/", async (req, res) => {
  try {
    res.render("home", { isLoggedIn });
  } catch (error) {
    res.status(404).json({ error: "page not found" });
  }
});

module.exports = router;
