import User from '../models/User';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';

class UserController {
  async store(request, response) {
    const { name, email, password, admin } = request.body;

    const password_hash = await bcrypt.hash(password, 8);

    const user = await User.create({
      id: uuidv4(),
      name,
      email,
      password_hash,
      admin,
    });

    return response.status(201).json(user);
  }
}

export default new UserController();
