const Ticket= require('../models/Ticket')
const User = require('../models/User')
const Message = require('../models/Message')
const {generateTicketId} = require('../utils/generateTicketId')

const createTicketFromChat = async (req, res) => {
    try {
      const { name, email, phone, firstMessageContent } = req.body;
  
      if (!name || !email || !phone || !firstMessageContent) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const superAdmin = await User.findOne({ role: "admin" }).sort({ createdAt: 1 });
      if (!superAdmin) {
        return res.status(500).json({ message: "No admin available to assign ticket" });
      }
  
      const ticketId = await generateTicketId();
  
      const newTicket = new Ticket({
        title: firstMessageContent,
        customer: { name, email, phone },
        assignedTo: superAdmin._id,
        ticketId
      });
  
      await newTicket.save();
  
      const firstMessage = await Message.create({
        ticket: newTicket._id,
        senderType: "customer",
        senderName: name,
        content: firstMessageContent
      });
  
      const followUpMessages = [
        {
          ticket: newTicket._id,
          senderType: "system",
          senderName: "System",
          content: "How can I help you today?"
        },
        {
          ticket: newTicket._id,
          senderType: "system",
          senderName: "System",
          content: "Ask me anything about your issue!"
        }
      ];
  
      await Message.insertMany(followUpMessages);
  
      res.status(201).json({
        message: "Ticket created and messages sent",
        ticket: newTicket,
        chat: [firstMessage, ...followUpMessages]
      });
    } catch (err) {
      console.error("Ticket Chat Creation Error:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

  const updateTicketStatus = async (req, res) => {
    try {
      const { ticketId } = req.params;
      const { status } = req.body;
  
      if (!["resolved", "unresolved"].includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
      }
  
      const ticket = await Ticket.findById(ticketId);
      if (!ticket) return res.status(404).json({ message: "Ticket not found" });
  
      ticket.status = status;
      await ticket.save();
  
      res.status(200).json({ message: "Ticket status updated", ticket });
    } catch (err) {
      console.error("Update Status Error:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

  const reassignTicket = async (req, res) => {
    try {
      const { ticketId } = req.params;
      const { newAssigneeId } = req.body;
  
      const ticket = await Ticket.findById(ticketId);
      if (!ticket) return res.status(404).json({ message: "Ticket not found" });
  
      const user = await User.findById(newAssigneeId);
      if (!user || !["admin", "team"].includes(user.role)) {
        return res.status(400).json({ message: "Invalid assignee" });
      }
  
      ticket.assignedTo = newAssigneeId;
      await ticket.save();
  
      res.status(200).json({ message: "Ticket reassigned successfully", ticket });
    } catch (err) {
      console.error("Reassign Ticket Error:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

  module.exports = {createTicketFromChat,updateTicketStatus,reassignTicket}