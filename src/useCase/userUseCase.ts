import { User } from "../domain/user";
import { UserUseCase } from "../interface/useCase/userUseCase";
import UserRepository from "../interface/repository/userRepository";

export default class UserUseCaseImpl implements UserUseCase {
  readonly userRepository: UserRepository;

  constructor(repository: UserRepository) {
    this.userRepository = repository;
  }

  async fetchUser(): Promise<User> {
    return await this.userRepository.find();
  }
}
