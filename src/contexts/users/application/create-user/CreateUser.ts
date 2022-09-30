import { User } from '../../domain/User';
import { UserEmail } from '../../domain/UserEmail';
import { UserId } from '../../domain/UserId';
import { UserName } from '../../domain/UserName';
import { UserRepository } from '../../domain/UserRepository';

type Params = {
  userId: UserId;
  userName: UserName;
  userEmail: UserEmail;
};

export class CreateUser {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async run({ userId, userName, userEmail }: Params): Promise<void> {
    const user = User.create(userId, userName, userEmail);

    await this.repository.save(user);
  }
}
