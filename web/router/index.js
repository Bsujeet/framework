'use strict';

const express = require('express');
const api = require('./api');

const router = express.Router();
router.get('/', (req, res) => {
  // res.json({ 'test': 'for default' });
  res.render('index.html');
});
// endpoints
// Login
router.post('/api/v1/login', api.login.post);
router.delete('/api/v1/login', api.login.delete);


// User
router.get('/api/v1/user/:userId', api.user.get);
router.get('/api/v1/user', api.user.get);
router.post('/api/v1/user', api.user.post);

// Request
router.get('/api/v1/request/:requestId', api.request.get);
router.get('/api/v1/request', api.request.get);
router.post('/api/v1/request', api.request.post);
// router.put('/api/v1/requests', api.requests.put);
// router.delete('/api/v1/requests/:requestId', api.requests.delete);

// Jobs
router.get('/api/v1/job/:jobId', api.request.getJob);
router.get('/api/v1/job', api.request.getJob);

// Resource
router.get('/api/v1/requests/inventory', api.resources.get);
router.get('/api/v1/requests/resources', api.resources.get);



module.exports = router;