const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET for DB
router.get("/", (req, res) => {
  console.log("GET /api/feedback");
  pool
    .query('SELECT * from "feedback";')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /api/feedback", error);
      res.sendStatus(500);
    });
});

// POST to DB
router.post("/", (req, res) => {
  const reflection = req.body;
  console.log(reflection);
  const { feeling, understanding, support, comments } = req.body;

  // Validation:
  if (feeling === "" || understanding === "" || support === "") {
    res
      .status(400)
      .send("A value came in as an empty string check input values");
    return;
  }

  if (feeling === null || understanding === null || support === null) {
    res.status(400).send("A value came in as null check input values");
    return;
  }

  if (feeling === undefined || understanding === undefined || support === undefined) {
    res.status(400).send("A value came in as undefined check input values");
    return;
  }

  if (feeling === NaN || understanding === NaN || support === NaN) {
    res.status(400).send("A value came in as NaN check input values");
    return;
  }

  const queryText =
    'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);';
  pool
    .query(queryText, [feeling, understanding, support, comments])
    .then(() => {
      console.log("finished posting!");
      res.status(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
