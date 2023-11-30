

const router = require('express').Router();
const projectCtrl = require("../controllers/projectCtrl")



// insert projects
router.post('/insert_one', projectCtrl.insertProject)

// get projects
router.get('/get_all', projectCtrl.getProjects)

module.exports = router;