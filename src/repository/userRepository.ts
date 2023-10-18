import UserRepository from "../interface/repository/userRepository";
import UserDriver from "../interface/driver/userDriver";
import { User } from "../domain/user";

export default class UserRepositoryImpl implements UserRepository {
  private readonly userDriver: UserDriver;

  constructor(userDriver: UserDriver) {
    this.userDriver = userDriver;
  }

  async find(): Promise<User> {
    const res = await this.userDriver.find();
    return new User(res.id, res.name);
  }
}
