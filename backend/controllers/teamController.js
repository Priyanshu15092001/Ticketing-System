const User = require("../models/User");

const addMember = async (req, res) => {
  try {
    const { firstName, lastName, email, role } = req.body;

    if (!["admin", "member"].includes(role)) {
      return res.status(400).json({ message: "Role must be admin or team" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    const inviter = await User.findById(req.user.id);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: inviter.password,
      role,
      invitedBy: inviter._id,
    });

    await newUser.save();
    res.status(201).json({ message: `${role} added successfully` });
  } catch (err) {
    console.error("Add Member Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllMembers = async (req, res) => {
  try {
    const members = await User.find().select("-password");
    res
      .status(200)
      .json({ message: "Team Members fetched successfully", teams: members });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getMember = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-password");

    if (user) {
      res.status(200).json({ message: "Member fetched successfully", user });
    } else {
      res.status(404).json({ message: "Member not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteMember = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (user) {
      res.status(200).json({ message: "Member deleted successfully" });
    } else {
      res.status(404).json({ message: "Member not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateMember = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
    }).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Member updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addMember, getAllMembers, getMember, deleteMember,updateMember };
