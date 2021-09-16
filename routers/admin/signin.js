const express = require('express');
const { isAdminAuthenticated, isRefreshAuthenticated } = require('../../middleware/application/middleware');
const { adminsignin, regenerateaccess } = require('../../controlers/admin/signin');

const router = express.Router()

router.post("/adminsignin", adminsignin)

router.get("/adminregenerateaccess", isRefreshAuthenticated, regenerateaccess)

module.exports = router