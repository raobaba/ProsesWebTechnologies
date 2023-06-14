const { UserModel } = require('../models/user.model');

const addUser = async (req, res) => {
    try {
        const newUser = new UserModel({
            username: req.body.username,
            mobile: req.body.mobile,
            email: req.body.email,
            address: req.body.address
        });

        const user = await newUser.save();
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
const getUser = async (req, res) => {
    try {
        const users = await UserModel.find();

        if (users.length === 0) {
            return res.status(404).json({ error: 'No users found' });
        }

        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
const getUserById = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await UserModel.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
  const editUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const updatedData = {
        username: req.body.username,
        mobile: req.body.mobile,
        email: req.body.email,
        address: req.body.address
      };
  
      const user = await UserModel.findByIdAndUpdate(userId, updatedData, { new: true });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
  const deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await UserModel.findByIdAndDelete(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
module.exports = { addUser, getUser,getUserById,editUser,deleteUser };
