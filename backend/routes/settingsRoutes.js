const express = require("express")
const { getSettings, updateSettings } = require("../controllers/settingsController.js")
const { protect, isAdmin } = require('../middlewares/authMiddlewares.js')

const router = express.Router();


router.get("/", getSettings);


router.put("/", protect, isAdmin, updateSettings);

module.exports=router