const express = require('express')
const {createTicketFromChat,updateTicketStatus,reassignTicket} =require('../controllers/ticketController')
const {protect,isAdmin} =require('../middlewares/authMiddlewares')

const router = express.Router();

router.post("/", createTicketFromChat);
router.put("/:ticketId/status", protect, updateTicketStatus);
router.put("/:ticketId/reassign",protect,isAdmin,reassignTicket)

module.exports=router