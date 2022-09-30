import { Nullable } from '../../../shared/domain/Nullable';
import { User } from './User';
import { UserId } from './UserId';

export interface UserRepository {
  save(user: User): Promise<any>;
  get(id: UserId): Promise<Nullable<User>>;
  delete(id: UserId): Promise<boolean>;
  exists(id: UserId): Promise<boolean>;
}
