const auth = (req, res, next) => {
  // const isLoggedIn = true;

  if (isLoggedIn) {
    next();
  } else {
    // res.redirect("/not-authorised");
    res.json({ error: "You are not authorised to access this page" });
  }
};

const isLoggedIn = false;

module.exports = { auth, isLoggedIn };
