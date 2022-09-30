export class UserNotExists extends Error {
  constructor() {
    super('The user does not exists');
  }
}
