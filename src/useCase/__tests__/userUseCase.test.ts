import { User } from "../../domain/user";
import UserRepository from "../../interface/repository/userRepository";
import UserUseCaseImpl from "../userUseCase";

class UserRepositoryMock implements UserRepository {
  find(): Promise<User> {
    throw "not implemented";
  }
}

describe("#fetchUser", () => {
  test("domain user are returned", async () => {
    const user1 = { id: 1 } as User;

    const mock = new UserRepositoryMock();
    mock.find = async () => user1;

    const userUseCase = new UserUseCaseImpl(mock);
    expect(await userUseCase.fetchUser()).toEqual(user1);
  });
});
