const auth = (req, res, next) => {
  const isLoggedIn = true;
  if (isLoggedIn) {
    next();
  } else {
    res.status(401).json({
      error: "Oops! It looks like you're not authorised to access this page :(",
    });
  }
};

module.exports = auth;
