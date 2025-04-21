const Ticket= require('../models/Ticket')

const generateTicketId = async () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const datePrefix = `${year}-0${month}${day}`;

  // const countToday = await Ticket.countDocuments({
  //   createdAt: {
  //     $gte: new Date(`${year}-${month}-${day}T00:00:00.000Z`),
  //     $lte: new Date(`${year}-${month}-${day}T23:59:59.999Z`),
  //   },
  // });

  // const number = String(countToday + 1).padStart(5, "0");
  // return `Ticket# ${datePrefix}-${number}`;
  return `Ticket# ${datePrefix}`;

};

module.exports={generateTicketId}