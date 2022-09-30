import { Nullable } from '../../../../shared/domain/Nullable';
import { User } from '../../domain/User';
import { UserId } from '../../domain/UserId';
import { UserRepository } from '../../domain/UserRepository';

export class MongoUserRepository implements UserRepository {
  save(user: User): Promise<any> {
    throw new Error('Method not implemented.');
  }
  get(id: UserId): Promise<Nullable<User>> {
    throw new Error('Method not implemented.');
  }
  delete(id: UserId): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  exists(id: UserId): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
