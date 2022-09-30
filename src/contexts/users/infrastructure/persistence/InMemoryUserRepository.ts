import { Nullable } from '../../../../shared/domain/Nullable';
import { User } from '../../domain/User';
import { UserId } from '../../domain/UserId';
import { UserRepository } from '../../domain/UserRepository';

export class InMemoryUserRepository implements UserRepository {
    readonly users: Map<String, User> = new Map<String, User>();

    save(user: User): Promise<any> {
        return Promise.resolve(this.users.set(user.id.value, user));
    }

    get(id: UserId): Promise<Nullable<User>> {
        return Promise.resolve<Nullable<User>>(this.users.get(id.value) || null);
    }

    delete(id: UserId): Promise<boolean> {
        return Promise.resolve(this.users.delete(id.value));
    }

    exists(id: UserId): Promise<boolean> {
        return Promise.resolve(this.users.has(id.value));
    }
}
