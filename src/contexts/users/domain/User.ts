import { UserEmail } from './UserEmail';
import { UserId } from './UserId';
import { UserName } from './UserName';

export class User {
  readonly id: UserId;
  readonly name: UserName;
  readonly email: UserEmail;

  constructor(id: UserId, name: UserName, email: UserEmail) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  static create(id: UserId, name: UserName, email: UserEmail) {
    const user = new User(id, name, email);

    // here validations or add events

    return user;
  }

  toPrimitive() {
    return {
      id: this.id.value,
      name: this.name.value,
      email: this.email.value
    };
  }
}
