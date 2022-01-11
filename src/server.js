const express = require("express");
const cors = require("cors");
const path = require("path");

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../", "public")));

const init = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`\nServer running on http://localhost:${PORT}\n`)
    );
  } catch (error) {
    console.error(error.message);
  }
};

init();
