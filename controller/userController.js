import User from "../model/User.js";



export const saveUser = async(req, res) => {
      try {
        const user = new User(req.body);
    const exsistingUser = await User.findOne({ email: req.body.email });
       if (exsistingUser) {
            return res.status(400).json({ message: "User already exsists" });
        } else {
            const savedUser = await user.save();
            res.status(201).json({ message: "User saved successfully", user: savedUser });
        }
      } catch (error) {
        res.status(500).json({ message: "Error saving user", error: error.message });
      }


}
export const getAllUsers = async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users", error: error.message });
    }
}
