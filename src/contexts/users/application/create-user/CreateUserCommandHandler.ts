import { Command } from '../../../../shared/domain/Command';
import { CommandHandler } from '../../../../shared/domain/CommandHandler';
import { UserEmail } from '../../domain/UserEmail';
import { UserId } from '../../domain/UserId';
import { UserName } from '../../domain/UserName';
import { CreateUser } from './CreateUser';
import { CreateUserCommand } from './CreateUserCommand';

export class CreateUserCommandHandler implements CommandHandler<CreateUserCommand, void> {
  constructor(private createUser: CreateUser) {}

  subscribedTo(): Command {
    return CreateUserCommand;
  }

  async handle(command: CreateUserCommand): Promise<void> {
    const userId = new UserId(command.id);
    const userName = new UserName(command.name);
    const userEmail = new UserEmail(command.email);

    await this.createUser.run({ userId, userName, userEmail });
  }
}
