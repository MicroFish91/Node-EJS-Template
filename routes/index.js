const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // req.body
  // '/api/:id' req.params.id

  // res.send();
  res.render("index", {});
  // res.json({ data: [
  //   {
  //     id: 1,
  //     name: 'Matt'
  //   },
  //   {
  //     id: 2,
  //     name: 'Fisher'
  //   }
  // ]});
});

module.exports = router;
