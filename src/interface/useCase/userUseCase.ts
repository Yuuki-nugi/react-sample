import { User } from "../../domain/user";

export interface UserUseCase {
  fetchUser(): Promise<User>;
}
