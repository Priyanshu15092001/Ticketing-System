const User = require("../models/User");
const bcrypt = require("bcrypt");

const getProfile = async (req, res) => {
    try {
    
      const id = req.user.id;
  
      const user = await User.findById(id).select('-password');
  
      if (user) {
        res
          .status(201)
          .json({ message: "User profile fetched successfully", user: user });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  
  const updateProfile = async (req, res) => {
    try {
  
      const {password}=req.body;
      const id = req.user.id;
      
      const hashedPassword = await bcrypt.hash(password,10)
  
      const updatedUser = await User.findByIdAndUpdate(
        id,
        {$set:{password:hashedPassword}},
        {new:true}
      ).select("-password");
  
      if(!updatedUser){
        res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({
        message: "Profile updated successfully",
        user: updatedUser,
      });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

module.exports={getProfile,updateProfile}