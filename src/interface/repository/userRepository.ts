import { User } from "../../domain/user";

export default interface UserRepository {
  find(): Promise<User>;
}
