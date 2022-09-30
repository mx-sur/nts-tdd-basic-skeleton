import { UserId } from '../../domain/UserId';
import { UserNotExists } from '../../domain/UserNotExists';
import { UserRepository } from '../../domain/UserRepository';
import { UserResponse } from '../UserResponse';

export class FindUser {
  constructor(private repository: UserRepository) {}

  async run(userId: UserId) {
    const user = await this.repository.get(userId);

    if (!user) {
        throw new UserNotExists();
    }

    return new UserResponse(user.toPrimitive());
  }
}
