import { Command } from './Command';

export type CommandResult = void | object;

export interface CommandHandler<T extends Command, R extends CommandResult> {
  subscribedTo(): Command;
  handle(command: T): Promise<R>;
}
