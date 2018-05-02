"use strict";

const express = require("express");
const api = require("./api");
const rdoc = require("../rdoc");

const router = express.Router();
router.get("/", (req, res) => {
  // res.json({ 'test': 'for default' });
  res.render("index.html");
});
// endpoints

// rdoc api

router.get("/rdoc/v1/doc/:id", (req, res) => {
  res.json(rdoc);
  // res
  //   .status(200)
  //   .json(rdoc)
  //   .end();
});

// Login
router.post("/api/v1/login", api.login.post);
router.delete("/api/v1/login", api.login.delete);
router.get("/api/v1/tokenRefresh", api.login.refresh);

// User
router.get("/api/v1/user/:userId", api.user.get);
router.get("/api/v1/user", api.user.get);
router.post("/api/v1/user", api.user.post);

// Request
router.get("/api/v1/request/:requestId", api.request.get);
router.get("/api/v1/request", api.request.get);
// router.get('/api/v1/request/template', api.request.get);
router.post("/api/v1/request", api.request.post);
router.post("/api/v1/request/clonevm", api.request.post);
// router.put('/api/v1/requests', api.requests.put);
// router.delete('/api/v1/requests/:requestId', api.requests.delete);

// Jobs
router.get("/api/v1/job/:jobId", api.request.getJob);
router.get("/api/v1/job", api.request.getJob);

// Resource
router.get("/api/v1/requests/inventory", api.resources.get);
router.get("/api/v1/requests/resources", api.resources.get);
router.get("/api/v1/requests/resources/edit", api.resources.get);
router.get("/api/v1/requests/resources/:resourceId", api.resources.get);

module.exports = router;
