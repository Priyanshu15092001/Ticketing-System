const express = require('express')
const {createTicketFromChat,updateTicketStatus,reassignTicket,getTickets} =require('../controllers/ticketController')
const {protect,isAdmin} =require('../middlewares/authMiddlewares')

const router = express.Router();

router.post("/", createTicketFromChat);
router.put("/:ticketId/status", protect, updateTicketStatus);
router.put("/:ticketId/reassign",protect,isAdmin,reassignTicket)
router.get("/",protect,getTickets)

module.exports=router