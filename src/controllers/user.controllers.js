import UserService from "../services/user.services.js";

export async function createUser(req, res) {
  try {
    const data = req.body;
    const response = await UserService.createUser(data);
    res.status(201).json({ user: response });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getUser(req, res) {
  try {
    const { email } =  req.params;
    const user = await UserService.getUser(email);
    if (!user) {
      throw new Error("User not found");
    }
    delete user.password;
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
}