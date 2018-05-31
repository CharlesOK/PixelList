"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
    .select("*")
    .from("users")
    .then((results) => {
      res.json(results);
    });
  });

  router.delete("/:id/items", (req, res) => {
    res.redirect("/");
  });

  router.put("/:id/items", (req, res) => {
    res.redirect("/");
  });

  return router;
};
